import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { createHash } from 'crypto';
import { PrismaService } from './prisma.service';

type AttendanceTypeValue = 'CHECK_IN' | 'TEMP_EXIT' | 'RETURN_TO_WORK' | 'CHECK_OUT';
type SettlementTypeValue = 'CREDIT' | 'CASH';
type TaskStatusValue = 'PENDING' | 'READY' | 'IN_PROGRESS' | 'DONE' | 'ISSUE' | 'BLOCKED';

type LoginPayload = { username?: string; password?: string; area?: 'ADMIN' | 'WORKER' };
type CreateOrderPayload = {
  customerMode?: 'existing' | 'new';
  customerId?: number;
  customerCode?: string;
  customerName?: string;
  customerPhone?: string;
  orderCode?: string;
  settlementType?: SettlementTypeValue;
  rollerCodes?: string[];
  requiredStages?: string[];
  stageEstimates?: Record<string, number>;
  diameterMm?: number;
  lengthMm?: number;
  material?: string;
  thicknessMm?: number;
  notes?: string;
};

type AttendancePayload = {
  type?: string;
  note?: string;
  userId?: number;
  eventAt?: string;
};

type WorkerPayload = {
  username?: string;
  password?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  active?: boolean;
  skills?: string[];
  phone?: string;
  baleUserId?: string;
  profileImageUrl?: string;
  notes?: string;
};

type RollerPatch = {
  ready?: boolean;
  settled?: boolean;
  sent?: boolean;
  shipmentNote?: string;
};

const WORKSHOP_NAME = 'کارگاه تراشکاری';
const optionalProductionStages = ['تعمیرات', 'تراش ۱', 'عملیات', 'تراش ۲', 'تراش ۳'];
const productionStages = [...optionalProductionStages, 'ارسال'];
const skillStages = [...productionStages, 'تامین'];
const activeAttendanceStates = ['حاضر در کارگاه', 'بازگشت به کار'];

const taskStatusLabels: Record<TaskStatusValue, string> = {
  PENDING: 'منتظر مرحله قبلی',
  READY: 'آماده انجام',
  IN_PROGRESS: 'در حال انجام',
  DONE: 'بسته‌شده',
  ISSUE: 'دارای مشکل',
  BLOCKED: 'متوقف',
};

const attendanceLabels: Record<AttendanceTypeValue, string> = {
  CHECK_IN: 'حاضر در کارگاه',
  TEMP_EXIT: 'خروج موقت / مرخصی ساعتی',
  RETURN_TO_WORK: 'بازگشت به کار',
  CHECK_OUT: 'خروج نهایی',
};

@Injectable()
export class AppService {
  private seeding = false;

  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async login(body: LoginPayload) {
    await this.ensureDemoData();
    const username = this.required(body.username, 'نام کاربری الزامی است.');
    const password = this.required(body.password, 'رمز عبور الزامی است.');
    const user = await this.prisma.appUser.findUnique({ where: { username }, include: { skills: true } });
    if (!user || !user.active || user.passwordHash !== this.hashPassword(password)) {
      throw new UnauthorizedException('نام کاربری یا رمز عبور اشتباه است.');
    }
    if (body.area === 'ADMIN' && !['MANAGER', 'OFFICE'].includes(user.role)) {
      throw new UnauthorizedException('این حساب مجوز ورود به پنل ادمین را ندارد.');
    }
    if (body.area === 'WORKER' && !['WORKER', 'SUPPLY', 'SHIPPING'].includes(user.role)) {
      throw new UnauthorizedException('این حساب برای پنل کارگر/تأمین معتبر نیست.');
    }
    await this.prisma.appUser.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
    return { message: 'ورود موفق بود.', user: this.serializeUser(user) };
  }

  async getWorkerDashboard(userId?: number) {
    await this.ensureDemoData();
    if (!Number.isFinite(userId)) throw new BadRequestException('ابتدا وارد حساب کاربری خود شوید.');
    const selectedWorker = await this.prisma.appUser.findUnique({ where: { id: Number(userId) }, include: { skills: true } });
    if (!selectedWorker) throw new BadRequestException('کاربر پیدا نشد.');
    if (!['WORKER', 'SUPPLY', 'SHIPPING'].includes(selectedWorker.role)) throw new BadRequestException('این کاربر به پنل کارگر/تأمین دسترسی ندارد.');

    const skills = selectedWorker.skills.map((skill: any) => skill.stage);
    const currentTask = selectedWorker.role === 'WORKER'
      ? await this.prisma.workTask.findFirst({
          where: { pickedByUserId: selectedWorker.id, status: 'IN_PROGRESS' as any },
          include: { roller: { include: { workshopOrder: { include: { customer: true } } } } },
          orderBy: { startedAt: 'asc' },
        })
      : null;

    const canWorkToday = await this.hasActiveAttendance(selectedWorker.id, selectedWorker.fullName);
    const availableTasks = currentTask || selectedWorker.role !== 'WORKER'
      ? []
      : await this.prisma.workTask.findMany({
          where: {
            status: 'READY' as any,
            stage: { in: skills },
            OR: [{ worker: null }, { worker: selectedWorker.fullName }],
          },
          include: { roller: { include: { workshopOrder: { include: { customer: true } } } } },
          orderBy: [{ availableAt: 'asc' }, { rollerId: 'asc' }],
          take: 50,
        });

    const blockedTasks = selectedWorker.role !== 'WORKER'
      ? []
      : await this.prisma.workTask.findMany({
          where: { status: { in: ['ISSUE', 'BLOCKED'] as any }, stage: { in: skills } },
          include: { roller: { include: { workshopOrder: { include: { customer: true } } } } },
          orderBy: { updatedAt: 'desc' },
          take: 10,
        });

    const today = this.getShiftDate(new Date());
    const pendingPreviousShift = await this.findOpenPreviousShift(selectedWorker.id, selectedWorker.fullName, today);
    const [attendanceSummary, rewardEntries, events, referrals] = await Promise.all([
      this.prisma.attendanceDailySummary.findUnique({ where: { workerName_shiftDate: { workerName: selectedWorker.fullName, shiftDate: today } } }),
      this.prisma.rewardLedger.findMany({ where: { workerName: selectedWorker.fullName }, orderBy: { createdAt: 'desc' }, take: 6 }),
      this.prisma.attendanceEvent.findMany({ where: { workerName: selectedWorker.fullName }, orderBy: { eventAt: 'desc' }, take: 8 }),
      this.prisma.referral.findMany({
        where: {
          targetRole: selectedWorker.role === 'SUPPLY' ? 'SUPPLY' : { in: ['WORKER', 'PRODUCTION'] },
          status: { in: selectedWorker.role === 'SUPPLY' ? ['IN_SUPPLY', 'OPEN', 'IN_PROGRESS'] : ['OPEN', 'IN_PROGRESS'] },
        } as any,
        include: { messages: { orderBy: { createdAt: 'desc' }, take: 2 } },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
    ]);

    return {
      apiConnected: true,
      workshopName: WORKSHOP_NAME,
      selectedWorker: this.serializeUser(selectedWorker),
      currentTask: currentTask ? this.serializeTask(currentTask) : null,
      availableTasks: availableTasks.map((task: any) => this.serializeTask(task)),
      blockedTasks: blockedTasks.map((task: any) => this.serializeTask(task)),
      canPickNewTask: !currentTask,
      canWorkToday,
      attendanceState: pendingPreviousShift ? 'شیفت قبلی بدون خروج نهایی باقی مانده است' : (attendanceSummary?.lastState ?? 'شیفت هنوز شروع نشده است'),
      pendingPreviousShift: pendingPreviousShift ? { id: pendingPreviousShift.id, shiftDate: pendingPreviousShift.shiftDate, shiftDateFa: pendingPreviousShift.shiftDateFa, lastState: pendingPreviousShift.lastState } : null,
      attendanceSummary: attendanceSummary ?? {
        workerName: selectedWorker.fullName,
        shiftDate: today,
        shiftDateFa: this.getJalaliDate(new Date()),
        shiftMonthFa: this.getJalaliMonth(new Date()),
        lastState: 'شیفت هنوز شروع نشده است',
        earlyArrivalReward: false,
        endOfDayReward: false,
        overtimeMinutes: 0,
        totalRewardAmount: 0,
        tempExitCount: 0,
      },
      rewards: rewardEntries,
      events: events.map((event: any) => ({ id: event.id, type: event.type, note: event.note, eventAt: event.eventAt, eventDateFa: event.eventDateFa, eventTimeFa: event.eventTimeFa })),
      referrals: referrals.map((referral: any) => this.serializeReferral(referral)),
    };
  }

  async getAdminDashboard() {
    await this.ensureDemoData();
    await this.checkOverdueTasks();
    await this.repairOrderDeliveryStates();

    const [users, customers, orders, allTasks, notifications, referrals, issues, rollerStats, attendanceToday, rewards] = await Promise.all([
      this.prisma.appUser.findMany({ include: { skills: true }, orderBy: [{ role: 'asc' }, { id: 'asc' }] }),
      this.prisma.customer.findMany({ orderBy: [{ createdAt: 'desc' }, { code: 'asc' }], take: 500 }),
      this.prisma.workshopOrder.findMany({
        include: {
          customer: true,
          satisfactionFeedbacks: { orderBy: { createdAt: 'desc' }, take: 2 },
          rollers: { include: { workTasks: { include: { pickedByUser: true }, orderBy: { sequence: 'asc' } } }, orderBy: { id: 'asc' } },
        },
        orderBy: { createdAt: 'desc' },
        take: 100,
      }),
      this.prisma.workTask.findMany({
        include: { pickedByUser: true, roller: { include: { workshopOrder: { include: { customer: true } } } } },
        orderBy: [{ stage: 'asc' }, { status: 'asc' }, { availableAt: 'asc' }],
        take: 600,
      }),
      this.prisma.systemNotification.findMany({ orderBy: { createdAt: 'desc' }, take: 60 }),
      this.prisma.referral.findMany({ include: { messages: { orderBy: { createdAt: 'desc' }, take: 6 } }, orderBy: { createdAt: 'desc' }, take: 100 }),
      this.prisma.issueReport.findMany({ orderBy: { createdAt: 'desc' }, take: 80 }),
      this.getRollerStats(),
      this.prisma.attendanceDailySummary.findMany({ where: { shiftDate: this.getShiftDate(new Date()) }, orderBy: { workerName: 'asc' } }),
      this.prisma.rewardLedger.findMany({ orderBy: { createdAt: 'desc' }, take: 60 }),
    ]);

    const workers = users.filter((user: any) => ['WORKER', 'SUPPLY'].includes(user.role));
    const currentTasks = allTasks.filter((task: any) => ['READY', 'IN_PROGRESS', 'BLOCKED', 'ISSUE'].includes(task.status));
    const closedTasks = allTasks.filter((task: any) => task.status === 'DONE');
    const kanban = productionStages.map((stage) => ({
      stage,
      ready: currentTasks.filter((task: any) => task.stage === stage && task.status === 'READY').map((task: any) => this.serializeTask(task)),
      inProgress: currentTasks.filter((task: any) => task.stage === stage && task.status === 'IN_PROGRESS').map((task: any) => this.serializeTask(task)),
      blocked: currentTasks.filter((task: any) => task.stage === stage && ['ISSUE', 'BLOCKED'].includes(task.status)).map((task: any) => this.serializeTask(task)),
      closed: closedTasks.filter((task: any) => task.stage === stage).map((task: any) => this.serializeTask(task)).slice(0, 60),
    }));

    const workerReports = await Promise.all(workers.map((worker: any) => this.buildWorkerReport(worker)));
    const orderTimingReports = orders.map((order: any) => this.serializeOrderTiming(order));

    return {
      apiConnected: true,
      workshopName: WORKSHOP_NAME,
      stages: productionStages,
      skillStages,
      users: users.map((user: any) => this.serializeUser(user)),
      workers: workers.map((worker: any) => this.serializeUser(worker)),
      customers: customers.map((customer: any) => this.serializeCustomer(customer)),
      workerReports,
      kanban,
      currentTasks: currentTasks.map((task: any) => this.serializeTask(task)),
      closedTasks: closedTasks.map((task: any) => this.serializeTask(task)),
      orders: orders.map((order: any) => this.serializeOrder(order)),
      openOrders: orders.filter((order: any) => !['DELIVERED', 'CLOSED'].includes(order.status)).map((order: any) => this.serializeOrder(order)),
      closedOrders: orders.filter((order: any) => ['DELIVERED', 'CLOSED'].includes(order.status)).map((order: any) => this.serializeOrder(order)),
      orderTimingReports,
      notifications: notifications.map((item: any) => ({ ...item })),
      unreadNotificationCount: notifications.filter((item: any) => !item.isRead).length,
      referrals: referrals.map((referral: any) => this.serializeReferral(referral)),
      issues,
      stats: {
        orderCount: orders.length,
        activeOrderCount: orders.filter((order: any) => !['DELIVERED', 'CLOSED'].includes(order.status)).length,
        readyTaskCount: allTasks.filter((task: any) => task.status === 'READY').length,
        inProgressTaskCount: allTasks.filter((task: any) => task.status === 'IN_PROGRESS').length,
        blockedTaskCount: allTasks.filter((task: any) => ['ISSUE', 'BLOCKED'].includes(task.status)).length,
        closedTaskCount: allTasks.filter((task: any) => task.status === 'DONE').length,
        delayedTaskCount: allTasks.filter((task: any) => task.delayed && task.status !== 'DONE').length,
        openReferralCount: referrals.filter((referral: any) => referral.status !== 'DONE').length,
        ...rollerStats,
      },
      attendanceToday,
      rewards,
    };
  }

  async createAdminOrder(body: CreateOrderPayload) {
    if (!this.seeding) await this.ensureDemoData();
    const orderCode = this.required(body.orderCode, 'کد سفارش الزامی است.');
    const rollerCodes = (body.rollerCodes ?? []).map((value) => this.normalizeDigits(value).trim()).filter(Boolean);
    if (rollerCodes.length === 0) throw new BadRequestException('حداقل یک نورد باید ثبت شود.');
    const uniqueRollers = Array.from(new Set(rollerCodes));
    if (uniqueRollers.length !== rollerCodes.length) throw new BadRequestException('کد نوردها در همین سفارش تکراری است.');
    const selectedStages = this.normalizeOrderStages(body.requiredStages ?? optionalProductionStages);

    const existingOrder = await this.prisma.workshopOrder.findUnique({ where: { code: orderCode } });
    if (existingOrder) throw new BadRequestException('کد سفارش واردشده قبلاً ثبت شده است. لطفاً کد جدید وارد کنید.');
    const duplicateRoller = await this.prisma.roller.findFirst({ where: { id: { in: uniqueRollers } } });
    if (duplicateRoller) throw new BadRequestException(`کد نورد ${duplicateRoller.id} قبلاً ثبت شده است.`);

    let customer: any;
    if (body.customerMode === 'existing' && body.customerId) {
      customer = await this.prisma.customer.findUnique({ where: { id: Number(body.customerId) } });
      if (!customer) throw new BadRequestException('مشتری انتخاب‌شده پیدا نشد.');
    } else {
      const customerCode = this.required(body.customerCode, 'کد مشتری الزامی است.');
      const customerName = this.required(body.customerName, 'نام مشتری الزامی است.');
      customer = await this.prisma.customer.upsert({
        where: { code: customerCode },
        update: { name: customerName, phone: body.customerPhone ? this.normalizeDigits(body.customerPhone).trim() : body.customerPhone },
        create: { code: customerCode, name: customerName, phone: body.customerPhone ? this.normalizeDigits(body.customerPhone).trim() : body.customerPhone },
      });
    }

    const now = new Date();
    const order = await this.prisma.workshopOrder.create({
      data: {
        code: orderCode,
        customerId: customer.id,
        settlementType: (body.settlementType ?? 'CREDIT') as any,
        notes: body.notes,
        status: 'ACTIVE',
        rollers: {
          create: uniqueRollers.map((rollerCode) => ({
            id: rollerCode,
            orderCode,
            stage: selectedStages[0],
            status: 'در انتظار انجام',
            diameterMm: body.diameterMm,
            lengthMm: body.lengthMm,
            material: body.material,
            thicknessMm: body.thicknessMm,
            requiredStages: selectedStages,
            workTasks: {
              create: selectedStages.map((stage, index) => {
                const estimatedDays = this.normalizeEstimatedDays(body.stageEstimates?.[stage]);
                return {
                  id: `${orderCode}-${rollerCode}-${index + 1}`,
                  sequence: index + 1,
                  stage,
                  status: index === 0 ? ('READY' as any) : ('PENDING' as any),
                  availableAt: index === 0 ? now : null,
                  estimatedDays,
                  dueAt: index === 0 ? this.addDays(now, estimatedDays) : null,
                };
              }),
            },
          })),
        },
      },
      include: { customer: true, rollers: { include: { workTasks: true } } },
    });

    await this.createNotification('سفارش جدید روی تابلو قرار گرفت', `سفارش ${orderCode} با ${uniqueRollers.length} نورد ثبت شد و مرحله اول روی تابلو قرار گرفت.`, 'OFFICE', 'ORDER', orderCode);
    return { message: 'سفارش با موفقیت ثبت شد و فعالیت‌های مرحله اول روی تابلو منتشر شدند.', order: this.serializeOrder(order) };
  }

  async createWorker(body: WorkerPayload) {
    const fullName = this.required(body.fullName, 'نام و نام خانوادگی الزامی است.');
    const username = this.required(body.username, 'نام کاربری الزامی است.');
    const password = this.required(body.password, 'رمز عبور الزامی است.');
    const duplicate = await this.prisma.appUser.findUnique({ where: { username } });
    if (duplicate) throw new BadRequestException('این نام کاربری قبلاً ثبت شده است.');
    const user = await this.prisma.appUser.create({
      data: {
        username,
        passwordHash: this.hashPassword(password),
        fullName,
        firstName: body.firstName,
        lastName: body.lastName,
        role: (body.role ?? 'WORKER') as any,
        active: body.active ?? true,
        phone: body.phone ? this.normalizeDigits(body.phone).trim() : body.phone,
        baleUserId: body.baleUserId ? this.normalizeDigits(body.baleUserId).trim() : body.baleUserId,
        profileImageUrl: body.profileImageUrl,
        notes: body.notes,
        skills: { create: this.normalizeStages(body.skills ?? [], true).map((stage) => ({ stage })) },
      },
      include: { skills: true },
    });
    return { message: 'کاربر با موفقیت ساخته شد.', user: this.serializeUser(user) };
  }

  async updateWorker(id: number, body: WorkerPayload) {
    const user = await this.prisma.appUser.findUnique({ where: { id }, include: { skills: true } });
    if (!user) throw new BadRequestException('کاربر پیدا نشد.');
    if (body.username && body.username !== user.username) {
      const duplicate = await this.prisma.appUser.findUnique({ where: { username: body.username } });
      if (duplicate) throw new BadRequestException('این نام کاربری قبلاً ثبت شده است.');
    }
    await this.prisma.workerSkill.deleteMany({ where: { userId: id } });
    const updated = await this.prisma.appUser.update({
      where: { id },
      data: {
        username: body.username ?? user.username,
        passwordHash: body.password ? this.hashPassword(body.password) : user.passwordHash,
        fullName: body.fullName ?? user.fullName,
        firstName: body.firstName ?? user.firstName,
        lastName: body.lastName ?? user.lastName,
        role: (body.role ?? user.role) as any,
        active: typeof body.active === 'boolean' ? body.active : user.active,
        phone: body.phone ? this.normalizeDigits(body.phone).trim() : (body.phone ?? user.phone),
        baleUserId: body.baleUserId ? this.normalizeDigits(body.baleUserId).trim() : (body.baleUserId ?? user.baleUserId),
        profileImageUrl: body.profileImageUrl ?? user.profileImageUrl,
        notes: body.notes ?? user.notes,
        skills: { create: this.normalizeStages(body.skills ?? user.skills.map((skill: any) => skill.stage), true).map((stage) => ({ stage })) },
      },
      include: { skills: true },
    });
    return { message: 'کاربر با موفقیت بروزرسانی شد.', user: this.serializeUser(updated) };
  }

  async createCustomer(body: { code?: string; name?: string; phone?: string; address?: string; notes?: string }) {
    const code = this.required(body.code, 'کد مشتری الزامی است.');
    const name = this.required(body.name, 'نام مشتری الزامی است.');
    const existing = await this.prisma.customer.findUnique({ where: { code } });
    if (existing) throw new BadRequestException('کد مشتری واردشده قبلاً ثبت شده است.');
    const customer = await this.prisma.customer.create({ data: { code, name, phone: body.phone ? this.normalizeDigits(body.phone).trim() : body.phone, address: body.address, notes: body.notes } });
    return { message: 'مشتری با موفقیت ثبت شد.', customer: this.serializeCustomer(customer) };
  }

  async pickTask(taskId: string, userId: number) {
    const user = await this.getWorkerOrThrow(userId);
    await this.ensureWorkerCanDoTaskAction(user.id, user.fullName);
    const current = await this.prisma.workTask.findFirst({ where: { pickedByUserId: userId, status: 'IN_PROGRESS' as any } });
    if (current) throw new BadRequestException('تا زمان اتمام این فعالیت امکان برداشتن کار جدید ندارید.');

    const task = await this.prisma.workTask.findUnique({ where: { id: taskId }, include: { roller: { include: { workshopOrder: true } } } });
    if (!task) throw new BadRequestException('فعالیت پیدا نشد.');
    if (task.status !== 'READY') throw new BadRequestException('این فعالیت در حال حاضر آماده برداشتن نیست.');
    const skills = user.skills.map((skill: any) => skill.stage);
    if (!skills.includes(task.stage)) throw new BadRequestException('این فعالیت با مهارت‌های کارگر هم‌خوانی ندارد.');
    if (task.worker && task.worker !== user.fullName) throw new BadRequestException('این فعالیت برای انجام‌دهنده قبلی رزرو شده است.');

    const now = new Date();
    const updated = await this.prisma.workTask.update({
      where: { id: taskId },
      data: { status: 'IN_PROGRESS' as any, pickedByUserId: userId, worker: user.fullName, startedAt: now, dueAt: task.dueAt ?? this.addDays(now, task.estimatedDays) },
      include: { pickedByUser: true, roller: { include: { workshopOrder: { include: { customer: true } } } } },
    });
    await this.prisma.roller.update({ where: { id: task.rollerId }, data: { stage: task.stage, status: 'در حال انجام' } });
    if (task.roller.workshopOrder && !task.roller.workshopOrder.productionStartedAt) {
      await this.prisma.workshopOrder.update({ where: { id: task.roller.workshopOrder.id }, data: { productionStartedAt: now, status: 'IN_PRODUCTION' } });
    }
    await this.createNotification('فعالیت تولید شروع شد', `${user.fullName} فعالیت ${task.stage} برای نورد ${task.rollerId} از سفارش ${task.roller.orderCode} را برداشت.`, 'OFFICE', 'TASK', taskId);
    return { message: 'فعالیت برداشته شد و به عنوان فعالیت جاری شما ثبت شد.', task: this.serializeTask(updated) };
  }

  async finishTask(taskId: string, userId: number) {
    await this.ensureWorkerCanDoTaskAction(userId);
    const task = await this.prisma.workTask.findUnique({
      where: { id: taskId },
      include: { roller: { include: { workshopOrder: { include: { rollers: { include: { workTasks: true } } } } } }, pickedByUser: true },
    });
    if (!task) throw new BadRequestException('فعالیت پیدا نشد.');
    if (task.status !== 'IN_PROGRESS') throw new BadRequestException('فقط فعالیت در حال انجام قابل پایان دادن است.');
    if (task.pickedByUserId !== userId) throw new BadRequestException('این فعالیت متعلق به کارگر واردشده نیست.');

    const now = new Date();
    const completedEarly = task.dueAt ? now.getTime() <= task.dueAt.getTime() : false;
    const delayed = task.dueAt ? now.getTime() > task.dueAt.getTime() : false;
    await this.prisma.workTask.update({ where: { id: taskId }, data: { status: 'DONE' as any, finishedAt: now, completedEarly, delayed } });

    const nextTask = await this.prisma.workTask.findFirst({ where: { rollerId: task.rollerId, sequence: { gt: task.sequence }, status: 'PENDING' as any }, orderBy: { sequence: 'asc' } });
    if (nextTask) {
      await this.prisma.workTask.update({ where: { id: nextTask.id }, data: { status: 'READY' as any, availableAt: now, dueAt: this.addDays(now, nextTask.estimatedDays) } });
      await this.prisma.roller.update({ where: { id: task.rollerId }, data: { stage: nextTask.stage, status: 'آماده مرحله بعد' } });
      await this.createNotification('مرحله بعدی آماده شد', `فعالیت ${nextTask.stage} برای نورد ${task.rollerId} از سفارش ${task.roller.orderCode} روی تابلو قرار گرفت.`, 'OFFICE', 'TASK', nextTask.id);
    } else {
      await this.prisma.roller.update({ where: { id: task.rollerId }, data: { ready: true, status: 'آماده ارسال', stage: 'آماده ارسال' } });
      await this.createNotification('نورد آماده ارسال شد', `همه مراحل نورد ${task.rollerId} از سفارش ${task.roller.orderCode} انجام شد.`, 'OFFICE', 'ROLLER', task.rollerId);
    }
    await this.updateOrderProductionFinish(task.roller.orderCode);
    const updated = await this.prisma.workTask.findUnique({ where: { id: taskId }, include: { pickedByUser: true, roller: { include: { workshopOrder: { include: { customer: true } } } } } });
    const timingMessage = completedEarly ? ' این فعالیت زودتر از زمان تخمینی انجام شد.' : delayed ? ' این فعالیت بعد از زمان تخمینی بسته شد.' : '';
    return { message: `${nextTask ? 'فعالیت پایان یافت و مرحله بعدی روی تابلو قرار گرفت.' : 'فعالیت پایان یافت و نورد آماده ارسال شد.'}${timingMessage}`, task: updated ? this.serializeTask(updated) : null };
  }

  async reportTaskIssue(taskId: string, userId: number, description: string) {
    await this.ensureWorkerCanDoTaskAction(userId);
    const task = await this.prisma.workTask.findUnique({ where: { id: taskId }, include: { pickedByUser: true, roller: true } });
    if (!task) throw new BadRequestException('فعالیت پیدا نشد.');
    if (task.status !== 'IN_PROGRESS') throw new BadRequestException('فقط برای فعالیت در حال انجام می‌توان گزارش مشکل ثبت کرد.');
    if (task.pickedByUserId !== userId) throw new BadRequestException('این فعالیت متعلق به کارگر واردشده نیست.');

    const now = new Date();
    const issue = await this.prisma.issueReport.create({ data: { rollerId: task.rollerId, taskId, stage: task.stage, description, status: 'OPEN' } });
    await this.prisma.workTask.update({ where: { id: taskId }, data: { status: 'BLOCKED' as any, pickedByUserId: null, blockedAt: now, blockedReason: description } });
    await this.prisma.roller.update({ where: { id: task.rollerId }, data: { status: 'متوقف به علت مشکل', stage: task.stage } });

    const referral = await this.prisma.referral.create({
      data: {
        title: 'گزارش مشکل تولید برای بررسی ادمین',
        description,
        targetRole: 'MANAGER',
        sourceRole: 'WORKER',
        sourceType: 'ISSUE',
        sourceId: String(issue.id),
        orderCode: task.roller.orderCode,
        rollerId: task.rollerId,
        taskId,
        issueId: issue.id,
        priority: 'HIGH',
        messages: { create: { authorRole: 'WORKER', authorName: task.pickedByUser?.fullName, message: description } },
      },
    });
    await this.createNotification(referral.title, `مشکل جدید برای بررسی ادمین: سفارش ${task.roller.orderCode} / نورد ${task.rollerId}`, 'MANAGER', 'REFERRAL', String(referral.id));
    return { message: 'گزارش مشکل ثبت شد، فعالیت از حالت جاری شما خارج شد و برای ادمین ارسال شد.', issue, referral };
  }

  async assignReferralToSupply(id: number, note?: string) {
    const referral = await this.prisma.referral.findUnique({ where: { id } });
    if (!referral) throw new BadRequestException('ارجاع پیدا نشد.');
    const updated = await this.prisma.referral.update({ where: { id }, data: { targetRole: 'SUPPLY', status: 'IN_SUPPLY' } });
    await this.addReferralMessage(id, { authorRole: 'MANAGER', authorName: 'ادمین', message: note || 'این فعالیت برای تأمین ارسال شد.' });
    await this.createNotification('ارجاع جدید برای تأمین', `سفارش ${referral.orderCode ?? '-'} / نورد ${referral.rollerId ?? '-'} برای تأمین ارسال شد.`, 'SUPPLY', 'REFERRAL', String(id));
    return { message: 'ارجاع برای نقش تأمین ارسال شد.', referral: updated };
  }

  async completeSupplyReferral(id: number, note?: string, actor?: string) {
    const referral = await this.prisma.referral.findUnique({ where: { id } });
    if (!referral) throw new BadRequestException('ارجاع پیدا نشد.');
    if (referral.targetRole !== 'SUPPLY') throw new BadRequestException('این ارجاع در کارتابل تأمین نیست.');
    const updated = await this.prisma.referral.update({ where: { id }, data: { targetRole: 'MANAGER', status: 'WAITING_ADMIN_RETURN' } });
    await this.addReferralMessage(id, { authorRole: 'SUPPLY', authorName: actor || 'مسئول تأمین', message: note || 'تأمین انجام شد و برای تأیید ادمین برگشت داده شد.' });
    await this.createNotification('تأمین انجام شد', `ارجاع سفارش ${referral.orderCode ?? '-'} / نورد ${referral.rollerId ?? '-'} برای بازگشت به انجام‌دهنده آماده است.`, 'MANAGER', 'REFERRAL', String(id));
    return { message: 'فعالیت تأمین انجام شد و ارجاع به ادمین برگشت داده شد.', referral: updated };
  }

  async returnReferralTaskToWorker(id: number, note?: string) {
    const referral = await this.prisma.referral.findUnique({ where: { id } });
    if (!referral) throw new BadRequestException('ارجاع پیدا نشد.');
    if (!referral.taskId) throw new BadRequestException('این ارجاع به فعالیت تولیدی متصل نیست.');
    const task = await this.prisma.workTask.findUnique({ where: { id: referral.taskId } });
    if (!task) throw new BadRequestException('فعالیت مرتبط پیدا نشد.');
    const now = new Date();
    await this.prisma.workTask.update({ where: { id: task.id }, data: { status: 'READY' as any, availableAt: now, dueAt: this.addDays(now, task.estimatedDays), blockedReason: null } });
    if (referral.issueId) await this.prisma.issueReport.update({ where: { id: referral.issueId }, data: { status: 'RESOLVED', resolvedAt: now } });
    const updated = await this.prisma.referral.update({ where: { id }, data: { status: 'DONE', completedAt: now, targetRole: 'WORKER' } });
    await this.addReferralMessage(id, { authorRole: 'MANAGER', authorName: 'ادمین', message: note || `فعالیت دوباره برای انجام‌دهنده قبلی (${task.worker ?? 'کارگر مربوطه'}) فعال شد.` });
    await this.createNotification('فعالیت به انجام‌دهنده برگشت', `فعالیت ${task.stage} سفارش ${referral.orderCode ?? '-'} / نورد ${referral.rollerId ?? '-'} دوباره روی تابلو قرار گرفت.`, 'WORKER', 'TASK', task.id);
    return { message: 'فعالیت دوباره برای انجام‌دهنده قبلی روی تابلو قرار گرفت.', referral: updated };
  }

  async createIssue(rollerId: string, description: string, taskId?: string) {
    const roller = await this.prisma.roller.findUnique({ where: { id: rollerId } });
    if (!roller) throw new BadRequestException('نورد پیدا نشد.');
    const issue = await this.prisma.issueReport.create({ data: { rollerId, taskId, stage: roller.stage, description, status: 'OPEN' } });
    return { message: 'گزارش مشکل ثبت شد.', issue };
  }

  async resolveIssue(issueId: number) {
    const issue = await this.prisma.issueReport.findUnique({ where: { id: issueId } });
    if (!issue) throw new BadRequestException('گزارش مشکل پیدا نشد.');
    await this.prisma.issueReport.update({ where: { id: issueId }, data: { status: 'RESOLVED', resolvedAt: new Date() } });
    if (issue.taskId) await this.prisma.workTask.update({ where: { id: issue.taskId }, data: { status: 'READY' as any, availableAt: new Date(), blockedReason: null } });
    await this.prisma.referral.updateMany({ where: { issueId }, data: { status: 'DONE', completedAt: new Date() } });
    return { message: 'مشکل حل شد و فعالیت دوباره روی تابلو قرار گرفت.' };
  }

  async updateTaskStatus(taskId: string, status: string) {
    const task = await this.prisma.workTask.update({ where: { id: taskId }, data: { status: status as any } });
    return { message: 'وضعیت فعالیت بروزرسانی شد.', task };
  }

  async updateRoller(id: string, body: RollerPatch) {
    const roller = await this.prisma.roller.findUnique({ where: { id }, include: { workshopOrder: true } });
    if (!roller) throw new BadRequestException('نورد پیدا نشد.');
    if (body.sent && roller.workshopOrder?.settlementType === 'CASH' && !roller.settled && !body.settled) throw new BadRequestException('برای سفارش نقدی، ابتدا باید تسویه ثبت شود.');
    const updated = await this.prisma.roller.update({
      where: { id },
      data: {
        ready: body.ready ?? roller.ready,
        settled: body.settled ?? roller.settled,
        sent: body.sent ?? roller.sent,
        settlementRecordedAt: body.settled && !roller.settled ? new Date() : roller.settlementRecordedAt,
        sentAt: body.sent && !roller.sent ? new Date() : roller.sentAt,
        shipmentNote: body.shipmentNote ?? roller.shipmentNote,
        status: body.sent ? 'ارسال‌شده' : body.settled ? 'تسویه‌شده' : roller.status,
      },
    });
    await this.repairOrderDeliveryStates();
    return { message: 'نورد بروزرسانی شد.', roller: updated };
  }

  async registerReadySettlements(orderCode: string) {
    const order = await this.getOrderOrThrow(orderCode);
    const result = await this.prisma.roller.updateMany({ where: { orderCode, ready: true, sent: false }, data: { settled: true, settlementRecordedAt: new Date(), status: 'تسویه‌شده' } });
    return { message: `تسویه ${result.count} نورد آماده از سفارش ${order.code} ثبت شد.` };
  }

  async sendReadyRollers(orderCode: string) {
    const order = await this.getOrderOrThrow(orderCode);
    const rollers = await this.prisma.roller.findMany({ where: { orderCode, ready: true, sent: false } });
    const notAllowed = rollers.filter((roller: any) => order.settlementType === 'CASH' && !roller.settled);
    if (notAllowed.length > 0) throw new BadRequestException('برای سفارش نقدی، ابتدا باید تسویه نوردهای آماده ثبت شود.');
    const result = await this.prisma.roller.updateMany({ where: { orderCode, ready: true, sent: false }, data: { sent: true, sentAt: new Date(), status: 'ارسال‌شده' } });
    await this.repairOrderDeliveryStates();
    return { message: `${result.count} نورد آماده ارسال شد.` };
  }

  async sendEntireOrder(orderCode: string) {
    const order = await this.getOrderOrThrow(orderCode);
    const rollers = await this.prisma.roller.findMany({ where: { orderCode } });
    const notReady = rollers.filter((roller: any) => !roller.ready);
    if (notReady.length > 0) throw new BadRequestException('همه نوردهای سفارش هنوز آماده ارسال نیستند.');
    const notSettled = rollers.filter((roller: any) => order.settlementType === 'CASH' && !roller.settled);
    if (notSettled.length > 0) throw new BadRequestException('برای سفارش نقدی، ابتدا تسویه همه نوردها را ثبت کنید.');
    await this.prisma.roller.updateMany({ where: { orderCode }, data: { sent: true, sentAt: new Date(), status: 'ارسال‌شده' } });
    await this.repairOrderDeliveryStates();
    return { message: 'کل سفارش ارسال شد.' };
  }

  async recordCustomerSatisfaction(orderCode: string, body: { satisfied?: boolean; reason?: string }) {
    const order = await this.getOrderOrThrow(orderCode);
    if (body.satisfied === false && !body.reason?.trim()) throw new BadRequestException('برای ثبت نارضایتی، وارد کردن دلیل الزامی است.');
    await this.prisma.satisfactionFeedback.create({ data: { orderId: order.id, result: body.satisfied ? 'SATISFIED' : 'UNSATISFIED', reason: body.reason } });
    await this.prisma.workshopOrder.update({ where: { id: order.id }, data: body.satisfied ? { satisfactionStatus: 'SATISFIED', status: 'CLOSED', closedAt: new Date() } : { satisfactionStatus: 'UNSATISFIED', status: 'NEEDS_FOLLOW_UP' } });
    if (!body.satisfied) {
      await this.prisma.referral.create({ data: { title: 'نارضایتی مشتری', description: body.reason ?? '', targetRole: 'MANAGER', sourceRole: 'OFFICE', sourceType: 'SATISFACTION', sourceId: orderCode, orderCode, priority: 'HIGH' } });
    }
    return { message: body.satisfied ? 'رضایت مشتری ثبت شد و سفارش بسته شد.' : 'نارضایتی مشتری ثبت و برای مدیر ارجاع شد.' };
  }

  async closeFollowUpOrder(orderCode: string) {
    const order = await this.getOrderOrThrow(orderCode);
    await this.prisma.workshopOrder.update({ where: { id: order.id }, data: { status: 'CLOSED', satisfactionStatus: 'FOLLOW_UP_CLOSED', closedAt: new Date() } });
    return { message: 'پیگیری انجام شد و سفارش بسته شد.' };
  }

  async markNotificationRead(id: number) {
    return this.prisma.systemNotification.update({ where: { id }, data: { isRead: true } });
  }

  async markAllNotificationsRead() {
    await this.prisma.systemNotification.updateMany({ where: { isRead: false }, data: { isRead: true } });
    return { message: 'همه اعلان‌ها خوانده شد.' };
  }

  async updateReferralStatus(id: number, status: string, note?: string, actor?: string) {
    const referral = await this.prisma.referral.update({ where: { id }, data: { status, completedAt: status === 'DONE' ? new Date() : null } });
    if (note?.trim()) await this.addReferralMessage(id, { message: note, authorRole: 'OFFICE', authorName: actor ?? 'کاربر سیستم' });
    return { message: 'وضعیت ارجاع بروزرسانی شد.', referral };
  }

  async addReferralMessage(id: number, body: { message?: string; authorRole?: string; authorName?: string }) {
    const message = this.required(body.message, 'متن توضیح الزامی است.');
    const created = await this.prisma.referralMessage.create({ data: { referralId: id, message, authorRole: body.authorRole ?? 'OFFICE', authorName: body.authorName ?? 'کاربر سیستم' } });
    return { message: 'توضیح به ارجاع اضافه شد.', referralMessage: created };
  }

  async recordAttendance(body: AttendancePayload) {
    await this.ensureDemoData();
    const type = (body.type ?? 'CHECK_IN') as AttendanceTypeValue;
    if (!['CHECK_IN', 'TEMP_EXIT', 'RETURN_TO_WORK', 'CHECK_OUT'].includes(type)) throw new BadRequestException('نوع رویداد حضور معتبر نیست.');
    if (type === 'TEMP_EXIT' && !body.note?.trim()) throw new BadRequestException('برای خروج موقت، وارد کردن دلیل خروج الزامی است.');
    if (!Number.isFinite(body.userId)) throw new BadRequestException('کاربر وارد سیستم نشده است.');
    const user = await this.prisma.appUser.findUnique({ where: { id: Number(body.userId) } });
    if (!user) throw new BadRequestException('کاربر پیدا نشد.');

    const eventAt = body.eventAt ? new Date(body.eventAt) : new Date();
    if (Number.isNaN(eventAt.getTime())) throw new BadRequestException('زمان ثبت‌شده معتبر نیست.');
    const shiftDate = this.getShiftDate(eventAt);
    const today = this.getShiftDate(new Date());
    const pendingPrevious = await this.findOpenPreviousShift(user.id, user.fullName, today);
    if (type === 'CHECK_IN' && pendingPrevious) {
      throw new BadRequestException(`ابتدا باید خروج نهایی شیفت ${pendingPrevious.shiftDateFa} را ثبت کنید.`);
    }

    const existing = await this.prisma.attendanceDailySummary.findUnique({ where: { workerName_shiftDate: { workerName: user.fullName, shiftDate } } });
    this.validateAttendanceTransition(existing, type);

    const fa = this.getJalaliParts(eventAt);
    await this.prisma.attendanceEvent.create({ data: { userId: user.id, workerName: user.fullName, type: type as any, note: body.note, eventAt, eventDateFa: fa.date, eventTimeFa: fa.time, eventMonthFa: fa.month } });
    const summary = await this.updateAttendanceSummary(user.id, user.fullName, type, eventAt, body.note);
    await this.createNotification('ثبت حضور کارگر', `${user.fullName}: ${attendanceLabels[type]} در ${fa.date} ساعت ${fa.time}`, 'MANAGER', 'ATTENDANCE', String(summary.id));
    const manualMessage = type === 'CHECK_OUT' && shiftDate !== today ? 'خروج نهایی روز قبل ثبت شد. اکنون می‌توانید ورود امروز را ثبت کنید.' : 'رویداد حضور ثبت شد.';
    return { message: manualMessage, attendanceState: summary.lastState, attendanceSummary: summary };
  }

  private async ensureDemoData() {
    const userCount = await this.prisma.appUser.count();
    if (userCount === 0) {
      const users = [
        { username: 'manager', password: 'admin123', fullName: 'مدیر کارگاه', role: 'MANAGER', skills: [], phone: '09120000001' },
        { username: 'office', password: 'office123', fullName: 'مسئول دفتر', role: 'OFFICE', skills: [], phone: '09120000002' },
        { username: 'purchase', password: '123456', fullName: 'مسئول خرید', role: 'PURCHASE', skills: [], phone: '09120000003' },
        { username: 'supply', password: '123456', fullName: 'مسئول تأمین', role: 'SUPPLY', skills: ['تامین'], phone: '09120000004' },
        { username: 'ali.rezaei', password: '123456', fullName: 'علی رضایی', role: 'WORKER', skills: ['تراش ۱'], phone: '09120000005' },
        { username: 'mohammad.ahmadi', password: '123456', fullName: 'محمد احمدی', role: 'WORKER', skills: ['تراش ۲'], phone: '09120000006' },
        { username: 'reza.karimi', password: '123456', fullName: 'رضا کریمی', role: 'WORKER', skills: ['تراش ۳'], phone: '09120000007' },
        { username: 'hossein.moradi', password: '123456', fullName: 'حسین مرادی', role: 'WORKER', skills: ['عملیات'], phone: '09120000008' },
        { username: 'mehdi.hosseini', password: '123456', fullName: 'مهدی حسینی', role: 'WORKER', skills: ['تعمیرات'], phone: '09120000009' },
        { username: 'shipping', password: '123456', fullName: 'مسئول ارسال', role: 'WORKER', skills: ['ارسال'], phone: '09120000010' },
      ];
      for (const user of users) {
        await this.prisma.appUser.create({
          data: {
            username: user.username,
            passwordHash: this.hashPassword(user.password),
            fullName: user.fullName,
            role: user.role as any,
            phone: user.phone,
            skills: { create: user.skills.map((stage) => ({ stage })) },
          },
        });
      }
    }

    const orderCount = await this.prisma.workshopOrder.count();
    if (orderCount === 0) {
      this.seeding = true;
      try {
        await this.createAdminOrder({
          customerMode: 'new',
          customerCode: '001',
          customerName: 'مشتری نمونه',
          customerPhone: '02100000000',
          orderCode: '200',
          settlementType: 'CASH',
          rollerCodes: ['3', '4', '5'],
          requiredStages: ['تعمیرات', 'تراش ۱', 'عملیات', 'تراش ۲', 'تراش ۳', 'ارسال'],
          stageEstimates: { 'تعمیرات': 1, 'تراش ۱': 1, 'عملیات': 2, 'تراش ۲': 1, 'تراش ۳': 1, 'ارسال': 1 },
          notes: 'داده نمونه برای تست Kanban مراحل تولید',
        });
      } finally {
        this.seeding = false;
      }
    }
  }

  private async getWorkerOrThrow(userId: number) {
    if (!Number.isFinite(userId)) throw new BadRequestException('کاربر وارد سیستم نشده است.');
    const user = await this.prisma.appUser.findUnique({ where: { id: Number(userId) }, include: { skills: true } });
    if (!user || user.role !== 'WORKER' || !user.active) throw new BadRequestException('کارگر واردشده معتبر یا فعال نیست.');
    return user;
  }

  private async ensureWorkerCanDoTaskAction(userId: number, workerName?: string) {
    const user = workerName ? { id: userId, fullName: workerName } : await this.prisma.appUser.findUnique({ where: { id: Number(userId) } });
    if (!user) throw new BadRequestException('کاربر پیدا نشد.');
    const active = await this.hasActiveAttendance(user.id, user.fullName);
    if (!active) throw new BadRequestException('ابتدا حضور خود را ثبت نمایید.');
  }

  private async findOpenPreviousShift(userId: number | undefined, workerName: string, todayShiftDate: string) {
    return this.prisma.attendanceDailySummary.findFirst({
      where: {
        workerName,
        shiftDate: { not: todayShiftDate },
        checkInAt: { not: null },
        checkOutAt: null,
        lastState: { not: attendanceLabels.CHECK_OUT },
      },
      orderBy: { shiftDate: 'desc' },
    });
  }

  private validateAttendanceTransition(existing: any, type: AttendanceTypeValue) {
    const state = existing?.lastState ?? 'شیفت هنوز شروع نشده است';
    const isNotStarted = !existing || state === 'شیفت هنوز شروع نشده است' || state === attendanceLabels.CHECK_OUT;
    const isActive = activeAttendanceStates.includes(state);
    const isTempExit = state === attendanceLabels.TEMP_EXIT;

    if (isNotStarted && type !== 'CHECK_IN') throw new BadRequestException('ابتدا حضور خود را ثبت نمایید.');
    if (isActive && !['TEMP_EXIT', 'CHECK_OUT'].includes(type)) throw new BadRequestException('در وضعیت حاضر فقط خروج موقت یا خروج نهایی قابل ثبت است.');
    if (isTempExit && type !== 'RETURN_TO_WORK') throw new BadRequestException('بعد از خروج موقت فقط امکان ثبت بازگشت وجود دارد.');
  }

  private async hasActiveAttendance(userId: number, workerName: string) {
    const today = this.getShiftDate(new Date());
    const summary = await this.prisma.attendanceDailySummary.findUnique({ where: { workerName_shiftDate: { workerName, shiftDate: today } } });
    return Boolean(summary && activeAttendanceStates.includes(summary.lastState));
  }

  private async checkOverdueTasks() {
    const now = new Date();
    const overdue = await this.prisma.workTask.findMany({
      where: { status: { in: ['READY', 'IN_PROGRESS', 'BLOCKED', 'ISSUE'] as any }, dueAt: { lt: now }, delayNotified: false },
      include: { roller: true, pickedByUser: true },
      take: 30,
    });
    for (const task of overdue as any[]) {
      await this.prisma.workTask.update({ where: { id: task.id }, data: { delayed: true, delayNotified: true, delayDetectedAt: now } });
      await this.createNotification('تاخیر فعالیت', `فعالیت ${task.stage} از سفارش ${task.roller.orderCode} / نورد ${task.rollerId} از زمان تخمینی عبور کرده است.`, 'MANAGER', 'TASK_DELAY', task.id);
    }
  }

  private async updateAttendanceSummary(userId: number | undefined, workerName: string, type: AttendanceTypeValue, eventAt: Date, note?: string) {
    const shiftDate = this.getShiftDate(eventAt);
    const fa = this.getJalaliParts(eventAt);
    const existing = await this.prisma.attendanceDailySummary.findUnique({ where: { workerName_shiftDate: { workerName, shiftDate } } });
    const next = {
      userId,
      workerName,
      shiftDate,
      shiftDateFa: fa.date,
      shiftMonthFa: fa.month,
      checkInAt: existing?.checkInAt ?? (type === 'CHECK_IN' ? eventAt : null),
      checkOutAt: type === 'CHECK_OUT' ? eventAt : existing?.checkOutAt,
      lastState: attendanceLabels[type],
      tempExitCount: (existing?.tempExitCount ?? 0) + (type === 'TEMP_EXIT' ? 1 : 0),
      notes: type === 'TEMP_EXIT' && note ? this.appendNote(existing?.notes, `${fa.time} خروج موقت: ${note}`) : note ?? existing?.notes,
    };
    const earlyArrivalReward = next.checkInAt ? this.minutesOfDay(next.checkInAt) < 8 * 60 : false;
    const endOfDayReward = next.checkOutAt ? this.minutesOfDay(next.checkOutAt) > 16 * 60 : false;
    const overtimeMinutes = next.checkOutAt && this.minutesOfDay(next.checkOutAt) >= 17 * 60 + 30 ? Math.max(0, this.minutesOfDay(next.checkOutAt) - 17 * 60) : 0;
    const totalRewardAmount = (earlyArrivalReward ? 500000 : 0) + (endOfDayReward ? 500000 : 0);
    const summary = await this.prisma.attendanceDailySummary.upsert({
      where: { workerName_shiftDate: { workerName, shiftDate } },
      update: { ...next, earlyArrivalReward, endOfDayReward, overtimeMinutes, totalRewardAmount },
      create: { ...next, earlyArrivalReward, endOfDayReward, overtimeMinutes, totalRewardAmount },
    });
    if (earlyArrivalReward) await this.upsertReward(userId, workerName, shiftDate, fa.date, 'EARLY_ARRIVAL', 500000, 'پاداش ورود قبل از ۸ صبح');
    if (endOfDayReward) await this.upsertReward(userId, workerName, shiftDate, fa.date, 'END_OF_DAY', 500000, 'پاداش خروج بعد از ۱۶');
    return summary;
  }

  private async upsertReward(userId: number | undefined, workerName: string, shiftDate: string, shiftDateFa: string, type: string, amount: number, reason: string) {
    await this.prisma.rewardLedger.upsert({ where: { workerName_shiftDate_type: { workerName, shiftDate, type } }, update: { amount, reason, userId, shiftDateFa }, create: { workerName, shiftDate, shiftDateFa, type, amount, reason, userId } });
  }

  private async updateOrderProductionFinish(orderCode: string) {
    const order = await this.prisma.workshopOrder.findUnique({ where: { code: orderCode }, include: { rollers: { include: { workTasks: true } } } });
    if (!order) return;
    const allDone = order.rollers.every((roller: any) => roller.workTasks.every((task: any) => task.status === 'DONE'));
    if (allDone && !order.productionFinishedAt) await this.prisma.workshopOrder.update({ where: { id: order.id }, data: { productionFinishedAt: new Date(), status: 'READY_FOR_SHIPMENT' } });
  }

  private async repairOrderDeliveryStates() {
    const orders = await this.prisma.workshopOrder.findMany({ include: { rollers: true } });
    for (const order of orders as any[]) {
      if (order.rollers.length === 0) continue;
      const allSent = order.rollers.every((roller: any) => roller.sent);
      if (allSent && order.status !== 'CLOSED' && order.status !== 'NEEDS_FOLLOW_UP') {
        const deliveredAt = order.deliveredAt ?? new Date();
        await this.prisma.workshopOrder.update({ where: { id: order.id }, data: { status: 'CLOSED', deliveredAt, closedAt: deliveredAt, satisfactionDueAt: order.satisfactionDueAt ?? this.addDays(deliveredAt, 7), satisfactionStatus: order.satisfactionStatus ?? 'WAITING' } });
      }
    }
  }

  private async buildWorkerReport(worker: any) {
    const today = this.getShiftDate(new Date());
    const monthFa = this.getJalaliMonth(new Date());
    const [todayDone, monthDone, todayIssues, currentTask, attendance, rewards, attendanceMonth, activityHistory] = await Promise.all([
      this.prisma.workTask.count({ where: { pickedByUserId: worker.id, status: 'DONE' as any, finishedAt: { gte: this.startOfToday() } } }),
      this.prisma.workTask.count({ where: { pickedByUserId: worker.id, status: 'DONE' as any } }),
      this.prisma.issueReport.count({ where: { status: 'OPEN', taskId: { not: null } } }),
      this.prisma.workTask.findFirst({ where: { pickedByUserId: worker.id, status: 'IN_PROGRESS' as any }, include: { roller: true } }),
      this.prisma.attendanceDailySummary.findUnique({ where: { workerName_shiftDate: { workerName: worker.fullName, shiftDate: today } } }),
      this.prisma.rewardLedger.findMany({ where: { workerName: worker.fullName, shiftDateFa: { startsWith: monthFa } }, orderBy: { createdAt: 'desc' } }),
      this.prisma.attendanceDailySummary.findMany({ where: { workerName: worker.fullName, shiftMonthFa: monthFa }, orderBy: { shiftDate: 'asc' } }),
      this.prisma.workTask.findMany({ where: { pickedByUserId: worker.id }, include: { roller: true }, orderBy: { updatedAt: 'desc' }, take: 80 }),
    ]);
    const doneTasks = activityHistory.filter((task: any) => task.status === 'DONE');
    const durations = doneTasks.map((task: any) => this.durationMinutes(task.startedAt, task.finishedAt)).filter((value: number) => value > 0);
    const avgMinutes = durations.length ? Math.round(durations.reduce((a: number, b: number) => a + b, 0) / durations.length) : 0;
    return {
      worker: this.serializeUser(worker),
      todayDone,
      monthDone,
      todayIssues,
      currentTask: currentTask ? this.serializeTask(currentTask) : null,
      attendance,
      attendanceMonth,
      activityHistory: activityHistory.map((task: any) => this.serializeTask({ ...task, roller: task.roller })),
      monthlyRewardAmount: rewards.reduce((sum: number, reward: any) => sum + reward.amount, 0),
      monthlyOvertimeMinutes: attendanceMonth.reduce((sum: number, item: any) => sum + item.overtimeMinutes, 0),
      averageTaskMinutes: avgMinutes,
    };
  }

  private async getRollerStats() {
    const [rollerCount, readyCount, sentCount, waitingSettlementCount] = await Promise.all([
      this.prisma.roller.count(),
      this.prisma.roller.count({ where: { ready: true, sent: false } }),
      this.prisma.roller.count({ where: { sent: true } }),
      this.prisma.roller.count({ where: { ready: true, settled: false, sent: false } }),
    ]);
    return { rollerCount, readyCount, sentCount, waitingSettlementCount };
  }

  private serializeCustomer(customer: any) {
    return { id: customer.id, code: customer.code, name: customer.name, phone: customer.phone, address: customer.address, notes: customer.notes, createdAt: customer.createdAt };
  }

  private serializeUser(user: any) {
    return {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      active: user.active,
      phone: user.phone,
      baleUserId: user.baleUserId,
      profileImageUrl: user.profileImageUrl,
      notes: user.notes,
      skills: (user.skills ?? []).map((skill: any) => skill.stage),
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
    };
  }

  private serializeTask(task: any) {
    const order = task.roller?.workshopOrder;
    const status = task.status as TaskStatusValue;
    return {
      id: task.id,
      rollerId: task.rollerId,
      orderCode: task.roller?.orderCode ?? order?.code ?? '-',
      customerCode: order?.customer?.code ?? '-',
      customerName: order?.customer?.name ?? 'مشتری ثبت نشده',
      sequence: task.sequence,
      stage: task.stage,
      status: task.status,
      statusLabel: taskStatusLabels[status] ?? task.status,
      worker: task.pickedByUser?.fullName ?? task.worker,
      pickedByUserId: task.pickedByUserId,
      availableAt: task.availableAt,
      startedAt: task.startedAt,
      finishedAt: task.finishedAt,
      blockedAt: task.blockedAt,
      blockedReason: task.blockedReason,
      estimatedDays: task.estimatedDays,
      dueAt: task.dueAt,
      completedEarly: task.completedEarly,
      delayed: task.delayed,
      delayDetectedAt: task.delayDetectedAt,
      durationMinutes: this.durationMinutes(task.startedAt, task.finishedAt ?? (status === 'IN_PROGRESS' ? new Date() : null)),
      activityCode: task.id,
    };
  }

  private serializeOrder(order: any) {
    const serializedRollers = (order.rollers ?? []).map((roller: any) => {
      const tasks = (roller.workTasks ?? []).map((task: any) => this.serializeTask({ ...task, roller: { ...roller, workshopOrder: order } }));
      const doneCount = tasks.filter((task: any) => task.status === 'DONE').length;
      const current = tasks.find((task: any) => ['IN_PROGRESS', 'READY', 'BLOCKED', 'ISSUE'].includes(task.status)) ?? tasks[tasks.length - 1];
      return { id: roller.id, stage: roller.stage, status: roller.status, ready: roller.ready, settled: roller.settled, sent: roller.sent, progressPercent: tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0, currentStage: current?.stage ?? '-', tasks };
    });
    const allTasks = serializedRollers.flatMap((roller: any) => roller.tasks);
    const doneCount = allTasks.filter((task: any) => task.status === 'DONE').length;
    return {
      id: order.id,
      code: order.code,
      customerCode: order.customer?.code,
      customerName: order.customer?.name,
      settlementType: order.settlementType,
      status: order.status,
      statusLabel: this.orderStatusLabel(order.status),
      satisfactionStatus: order.satisfactionStatus,
      createdAt: order.createdAt,
      productionStartedAt: order.productionStartedAt,
      productionFinishedAt: order.productionFinishedAt,
      deliveredAt: order.deliveredAt,
      closedAt: order.closedAt,
      totalDurationText: this.durationText(order.createdAt, order.deliveredAt ?? order.closedAt),
      productionDurationText: this.durationText(order.productionStartedAt, order.productionFinishedAt),
      progressPercent: allTasks.length ? Math.round((doneCount / allTasks.length) * 100) : 0,
      rollers: serializedRollers,
    };
  }

  private serializeOrderTiming(order: any) {
    return { orderCode: order.code, customerName: order.customer?.name, status: order.status, createdAt: order.createdAt, productionStartedAt: order.productionStartedAt, productionFinishedAt: order.productionFinishedAt, deliveredAt: order.deliveredAt, totalDurationText: this.durationText(order.createdAt, order.deliveredAt ?? order.closedAt), productionDurationText: this.durationText(order.productionStartedAt, order.productionFinishedAt), rollerCount: order.rollers?.length ?? 0 };
  }

  private serializeReferral(referral: any) {
    return { id: referral.id, title: referral.title, description: referral.description, targetRole: referral.targetRole, sourceRole: referral.sourceRole, orderCode: referral.orderCode, rollerId: referral.rollerId, taskId: referral.taskId, status: referral.status, priority: referral.priority, createdAt: referral.createdAt, messages: referral.messages ?? [] };
  }

  private async createNotification(title: string, message: string, targetRole: string, sourceType?: string, sourceId?: string) {
    return this.prisma.systemNotification.create({ data: { title, message, targetRole, sourceType, sourceId } });
  }

  private async getOrderOrThrow(orderCode: string) {
    const order = await this.prisma.workshopOrder.findUnique({ where: { code: orderCode } });
    if (!order) throw new BadRequestException('سفارش پیدا نشد.');
    return order;
  }

  private normalizeDigits(value: unknown) {
    return String(value ?? '')
      .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
      .replace(/[٠-٩]/g, (digit) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)))
      .replace(/،/g, ',');
  }

  private required(value: string | undefined, message: string) {
    const normalized = this.normalizeDigits(value).trim();
    if (!normalized) throw new BadRequestException(message);
    return normalized;
  }

  private normalizeStages(stages: string[], includeSupply = false) {
    const cleaned = stages.map((stage) => stage.trim()).filter(Boolean);
    const allowed = includeSupply ? skillStages : productionStages;
    return allowed.filter((stage) => cleaned.includes(stage));
  }

  private normalizeOrderStages(stages: string[]) {
    const selected = this.normalizeStages(stages).filter((stage) => stage !== 'ارسال');
    return [...selected, 'ارسال'];
  }

  private normalizeEstimatedDays(value: number | string | undefined) {
    const days = Number(this.normalizeDigits(value ?? 1));
    if (!Number.isFinite(days) || days <= 0) return 1;
    return Math.max(1, Math.round(days));
  }

  private getShiftDate(date: Date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private getJalaliParts(date: Date) {
    const clean = (value: string) => value.replace(/\u200e|\u200f/g, '').trim();
    const dateText = clean(new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date));
    const timeText = clean(new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit' }).format(date));
    const parts = dateText.split('/');
    return { date: dateText, time: timeText, month: parts.length >= 2 ? `${parts[0]}/${parts[1]}` : dateText.slice(0, 7) };
  }

  private getJalaliDate(date: Date) { return this.getJalaliParts(date).date; }
  private getJalaliMonth(date: Date) { return this.getJalaliParts(date).month; }

  private minutesOfDay(date: Date) { return date.getHours() * 60 + date.getMinutes(); }

  private startOfToday() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  }

  private addDays(date: Date, days: number) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
  }

  private durationMinutes(start?: Date | null, end?: Date | null) {
    if (!start || !end) return 0;
    return Math.max(0, Math.round((new Date(end).getTime() - new Date(start).getTime()) / 60000));
  }

  private durationText(start?: Date | null, end?: Date | null) {
    const minutes = this.durationMinutes(start, end);
    if (!minutes) return 'ثبت نشده';
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const mins = minutes % 60;
    return `${days ? `${days} روز ` : ''}${hours ? `${hours} ساعت ` : ''}${mins ? `${mins} دقیقه` : ''}`.trim();
  }

  private appendNote(oldNote: string | null | undefined, nextNote: string) {
    return oldNote ? `${oldNote}\n${nextNote}` : nextNote;
  }

  private hashPassword(password: string) {
    return createHash('sha256').update(password).digest('hex');
  }

  private orderStatusLabel(status: string) {
    const map: Record<string, string> = { ACTIVE: 'ثبت‌شده / فعال', IN_PRODUCTION: 'در حال تولید', READY_FOR_SHIPMENT: 'آماده ارسال', DELIVERED: 'تحویل‌شده', NEEDS_FOLLOW_UP: 'نیازمند پیگیری', CLOSED: 'بسته‌شده' };
    return map[status] ?? status;
  }
}
