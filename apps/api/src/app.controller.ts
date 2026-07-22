import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth() {
    return { status: 'ok', service: 'roller-workshop-api', timestamp: new Date().toISOString() };
  }

  @Get('db-health')
  async getDbHealth() {
    const record = await this.prisma.healthCheck.create({ data: { label: 'api-db-connection-ok' } });
    const total = await this.prisma.healthCheck.count();
    return { status: 'ok', database: 'mysql', insertedId: record.id, totalHealthChecks: total, createdAt: record.createdAt };
  }

  @Post('auth/login')
  login(@Body() body: { username?: string; password?: string; area?: 'ADMIN' | 'WORKER' }) {
    return this.appService.login(body);
  }

  @Get('miniapp/bootstrap')
  getMiniappBootstrap(@Query('userId') userId?: string) {
    return this.appService.getWorkerDashboard(userId ? Number(userId) : undefined);
  }

  @Get('admin/bootstrap')
  getAdminBootstrap() {
    return this.appService.getAdminDashboard();
  }

  @Post('admin/orders')
  createAdminOrder(
    @Body()
    body: {
      customerMode?: 'existing' | 'new';
      customerId?: number;
      customerCode?: string;
      customerName?: string;
      customerPhone?: string;
      orderCode?: string;
      settlementType?: 'CREDIT' | 'CASH';
      rollerCodes?: string[];
      requiredStages?: string[];
      stageEstimates?: Record<string, number>;
      diameterMm?: number;
      lengthMm?: number;
      material?: string;
      thicknessMm?: number;
      notes?: string;
    },
  ) {
    return this.appService.createAdminOrder(body);
  }

  @Post('admin/customers')
  createCustomer(@Body() body: { code?: string; name?: string; phone?: string; address?: string; notes?: string }) {
    return this.appService.createCustomer(body);
  }

  @Post('admin/workers')
  createWorker(@Body() body: { username?: string; password?: string; fullName?: string; firstName?: string; lastName?: string; role?: string; active?: boolean; skills?: string[]; phone?: string; baleUserId?: string; profileImageUrl?: string; notes?: string }) {
    return this.appService.createWorker(body);
  }

  @Patch('admin/workers/:id')
  updateWorker(@Param('id') id: string, @Body() body: { username?: string; password?: string; fullName?: string; firstName?: string; lastName?: string; role?: string; active?: boolean; skills?: string[]; phone?: string; baleUserId?: string; profileImageUrl?: string; notes?: string }) {
    return this.appService.updateWorker(Number(id), body);
  }

  @Post('admin/referrals/:id/assign-supply')
  assignReferralToSupply(@Param('id') id: string, @Body() body: { note?: string }) {
    return this.appService.assignReferralToSupply(Number(id), body.note);
  }

  @Post('supply/referrals/:id/complete')
  completeSupplyReferral(@Param('id') id: string, @Body() body: { note?: string; actor?: string }) {
    return this.appService.completeSupplyReferral(Number(id), body.note, body.actor);
  }

  @Post('admin/referrals/:id/return-to-worker')
  returnReferralTaskToWorker(@Param('id') id: string, @Body() body: { note?: string }) {
    return this.appService.returnReferralTaskToWorker(Number(id), body.note);
  }

  @Post('admin/issues/:id/resolve')
  resolveIssue(@Param('id') id: string) {
    return this.appService.resolveIssue(Number(id));
  }

  @Post('admin/orders/:code/settle-ready')
  registerReadySettlements(@Param('code') code: string) {
    return this.appService.registerReadySettlements(code);
  }

  @Post('admin/orders/:code/send-ready')
  sendReadyRollers(@Param('code') code: string) {
    return this.appService.sendReadyRollers(code);
  }

  @Post('admin/orders/:code/send-all')
  sendEntireOrder(@Param('code') code: string) {
    return this.appService.sendEntireOrder(code);
  }

  @Post('admin/orders/:code/satisfaction')
  recordCustomerSatisfaction(@Param('code') code: string, @Body() body: { satisfied?: boolean; reason?: string }) {
    return this.appService.recordCustomerSatisfaction(code, body);
  }

  @Post('admin/orders/:code/close-follow-up')
  closeFollowUpOrder(@Param('code') code: string) {
    return this.appService.closeFollowUpOrder(code);
  }

  @Post('admin/notifications/:id/read')
  markNotificationRead(@Param('id') id: string) {
    return this.appService.markNotificationRead(Number(id));
  }

  @Post('admin/notifications/read-all')
  markAllNotificationsRead() {
    return this.appService.markAllNotificationsRead();
  }

  @Post('referrals/:id/status')
  updateReferralStatus(@Param('id') id: string, @Body() body: { status?: string; note?: string; actor?: string }) {
    return this.appService.updateReferralStatus(Number(id), body.status ?? 'IN_PROGRESS', body.note, body.actor);
  }

  @Post('referrals/:id/messages')
  addReferralMessage(@Param('id') id: string, @Body() body: { message?: string; authorRole?: string; authorName?: string }) {
    return this.appService.addReferralMessage(Number(id), body);
  }

  @Post('attendance/events')
  recordAttendance(@Body() body: { type?: string; note?: string; userId?: number; eventAt?: string }) {
    return this.appService.recordAttendance(body);
  }

  @Post('tasks/:id/pick')
  pickTask(@Param('id') id: string, @Body() body: { userId?: number }) {
    return this.appService.pickTask(id, Number(body.userId));
  }

  @Post('tasks/:id/finish')
  finishTask(@Param('id') id: string, @Body() body: { userId?: number }) {
    return this.appService.finishTask(id, Number(body.userId));
  }

  @Post('tasks/:id/issue')
  reportTaskIssue(@Param('id') id: string, @Body() body: { userId?: number; description?: string }) {
    return this.appService.reportTaskIssue(id, Number(body.userId), body.description ?? 'مشکل بدون توضیح ثبت شد');
  }

  @Patch('tasks/:id/status')
  updateTaskStatus(@Param('id') id: string, @Body() body: { status?: string }) {
    return this.appService.updateTaskStatus(id, body.status ?? 'READY');
  }

  @Post('issues')
  createIssue(@Body() body: { rollerId?: string; taskId?: string; description?: string; userId?: number }) {
    if (body.taskId) return this.appService.reportTaskIssue(body.taskId, Number(body.userId), body.description ?? 'مشکل بدون توضیح ثبت شد');
    return this.appService.createIssue(body.rollerId ?? '', body.description ?? '', body.taskId);
  }

  @Patch('rollers/:id')
  updateRoller(@Param('id') id: string, @Body() body: { ready?: boolean; settled?: boolean; sent?: boolean; shipmentNote?: string }) {
    return this.appService.updateRoller(id, body);
  }
}
