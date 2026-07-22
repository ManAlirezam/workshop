import { FormEvent, useEffect, useMemo, useState } from 'react';
import './styles.css';

const API_BASE = 'http://localhost:3000/api';
const ORDER_STAGES = ['تعمیرات', 'تراش ۱', 'عملیات', 'تراش ۲', 'تراش ۳'];
const ALL_ORDER_STAGES = [...ORDER_STAGES, 'ارسال'];
const SKILLS = [...ORDER_STAGES, 'ارسال', 'تامین'];

type User = { id: number; username: string; fullName: string; firstName?: string; lastName?: string; role: string; active: boolean; skills: string[]; phone?: string; baleUserId?: string; profileImageUrl?: string; notes?: string; createdAt?: string; lastLoginAt?: string };
type Customer = { id: number; code: string; name: string; phone?: string; address?: string; notes?: string; createdAt: string };
type Task = { id: string; orderCode: string; rollerId: string; customerName: string; stage: string; status: string; statusLabel: string; worker?: string; pickedByUserId?: number; startedAt?: string; availableAt?: string; finishedAt?: string; blockedAt?: string; dueAt?: string; estimatedDays?: number; completedEarly?: boolean; delayed?: boolean; blockedReason?: string; durationMinutes?: number; activityCode?: string };
type KanbanColumn = { stage: string; ready: Task[]; inProgress: Task[]; blocked: Task[]; closed: Task[] };
type AttendanceRow = { id: number; shiftDateFa: string; checkInAt?: string; checkOutAt?: string; lastState: string; overtimeMinutes: number; totalRewardAmount: number; tempExitCount: number; notes?: string };
type WorkerReport = { worker: User; todayDone: number; monthDone: number; todayIssues: number; currentTask: Task | null; attendance?: AttendanceRow | null; monthlyRewardAmount: number; monthlyOvertimeMinutes: number; averageTaskMinutes: number; attendanceMonth: AttendanceRow[]; activityHistory: Task[] };
type Roller = { id: string; stage: string; status: string; ready: boolean; settled: boolean; sent: boolean; progressPercent: number; currentStage: string; tasks: Task[] };
type Order = { code: string; customerName: string; customerCode: string; status: string; statusLabel: string; settlementType: string; totalDurationText: string; productionDurationText: string; progressPercent: number; rollers: Roller[] };
type Referral = { id: number; title: string; description: string; targetRole: string; sourceRole: string; status: string; orderCode?: string; rollerId?: string; taskId?: string; priority?: string; messages?: Array<{ id: number; authorName?: string; authorRole: string; message: string; createdAt: string }> };
type AdminData = { workshopName: string; stages: string[]; skillStages: string[]; users: User[]; workers: User[]; customers: Customer[]; workerReports: WorkerReport[]; kanban: KanbanColumn[]; currentTasks: Task[]; closedTasks: Task[]; orders: Order[]; openOrders: Order[]; closedOrders: Order[]; orderTimingReports: Array<{ orderCode: string; customerName: string; status: string; totalDurationText: string; productionDurationText: string; rollerCount: number }>; notifications: Array<{ id: number; title: string; message: string; targetRole: string; isRead: boolean; createdAt: string }>; unreadNotificationCount: number; referrals: Referral[]; stats: Record<string, number>; };

type Tab = 'dashboard' | 'activities' | 'staff' | 'customers' | 'orders' | 'referrals' | 'notifications' | 'attendance';
type ActivitySubTab = 'current' | 'closed';
type OrdersSubTab = 'open' | 'closed';
type OrderForm = { customerMode: 'existing' | 'new'; selectedCustomerId: number | ''; customerCode: string; customerName: string; customerPhone: string; orderCode: string; settlementType: 'CREDIT' | 'CASH'; rollerCodes: string; requiredStages: string[]; stageEstimates: Record<string, number> };
type WorkerForm = { username: string; password: string; fullName: string; firstName: string; lastName: string; role: string; active: boolean; skills: string[]; phone: string; baleUserId: string; profileImageUrl: string; notes: string };

async function parseResponse(response: Response) { const text = await response.text(); const data = text ? JSON.parse(text) : null; if (!response.ok) { const message = data?.message ?? 'خطا در ارتباط با سرور'; throw new Error(Array.isArray(message) ? message.join('، ') : message); } return data; }
function money(value: number) { return new Intl.NumberFormat('fa-IR').format(value ?? 0); }
function roleLabel(role: string) { return ({ MANAGER: 'مدیر', OFFICE: 'مسئول دفتر', WORKER: 'کارگر', SUPPLY: 'تأمین', PURCHASE: 'خرید', SHIPPING: 'ارسال' } as Record<string, string>)[role] ?? role; }
function formatDate(value?: string) { if (!value) return '-'; return new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value)); }
function formatTime(value?: string) { if (!value) return '-'; return new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit' }).format(new Date(value)); }
function taskTone(task: Task) { if (task.status === 'DONE') return 'done'; if (task.delayed) return 'delayed'; if (['BLOCKED', 'ISSUE'].includes(task.status)) return 'blocked'; if (task.status === 'IN_PROGRESS') return 'active'; return 'ready'; }

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
function toFaDigits(value: unknown) { return String(value ?? '').replace(/[0-9]/g, (digit) => PERSIAN_DIGITS[Number(digit)]); }
function toLatinDigits(value: unknown) {
  return String(value ?? '')
    .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)));
}
function parseFaNumber(value: unknown, fallback = 1) {
  const normalized = toLatinDigits(value).replace(/[^0-9.]/g, '');
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed > 0 ? Math.round(parsed) : fallback;
}
function convertVisibleDigits(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'TEXTAREA'].includes(parent.tagName) || parent.closest('.hint, .latin')) continue;
    node.nodeValue = toFaDigits(node.nodeValue ?? '');
  }
}
function usePersianDigits() {
  useEffect(() => {
    const root = document.querySelector('.page');
    if (!root) return;
    window.requestAnimationFrame(() => convertVisibleDigits(root));
  });
}
function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('خواندن فایل تصویر ناموفق بود.'));
    reader.readAsDataURL(file);
  });
}
function Avatar({ user }: { user?: { fullName?: string; profileImageUrl?: string } }) {
  const initial = (user?.fullName || '؟').slice(0, 1);
  return <div className="avatar">{user?.profileImageUrl ? <img src={user.profileImageUrl} alt={user.fullName || 'تصویر کاربر'} /> : initial}</div>;
}

function readStoredAdmin(): User | null { const raw = localStorage.getItem('adminUser'); if (!raw) return null; try { return JSON.parse(raw) as User; } catch { return null; } }
const emptyWorker: WorkerForm = { username: '', password: '', fullName: '', firstName: '', lastName: '', role: 'WORKER', active: true, skills: ['تراش ۱'], phone: '', baleUserId: '', profileImageUrl: '', notes: '' };

export default function App() {
  usePersianDigits();
  const [adminUser, setAdminUser] = useState<User | null>(() => readStoredAdmin());
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [data, setData] = useState<AdminData | null>(null);
  const [tab, setTab] = useState<Tab>('dashboard');
  const [activitySubTab, setActivitySubTab] = useState<ActivitySubTab>('current');
  const [ordersSubTab, setOrdersSubTab] = useState<OrdersSubTab>('open');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedWorker, setSelectedWorker] = useState<WorkerReport | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [customerForm, setCustomerForm] = useState({ code: '', name: '', phone: '', address: '', notes: '' });
  const [orderForm, setOrderForm] = useState<OrderForm>({ customerMode: 'existing', selectedCustomerId: '', customerCode: '', customerName: '', customerPhone: '', orderCode: '۲۰۱', settlementType: 'CASH', rollerCodes: '۶،۷،۸', requiredStages: ['تعمیرات', 'تراش ۱', 'عملیات'], stageEstimates: { 'تعمیرات': 1, 'تراش ۱': 1, 'عملیات': 2, 'تراش ۲': 1, 'تراش ۳': 1, 'ارسال': 1 } });
  const [workerForm, setWorkerForm] = useState<WorkerForm>(emptyWorker);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [workerModalMode, setWorkerModalMode] = useState<'create' | 'edit' | 'profile' | null>(null);

  async function load() {
    if (!adminUser) return;
    setLoading(true);
    try {
      const next = await parseResponse(await fetch(`${API_BASE}/admin/bootstrap`));
      setData(next);
      if (!orderForm.selectedCustomerId && next.customers?.[0]) setOrderForm((prev) => ({ ...prev, selectedCustomerId: next.customers[0].id }));
    } catch (error) { setMessage(error instanceof Error ? error.message : 'خطا در دریافت اطلاعات'); }
    finally { setLoading(false); }
  }
  async function login(event: FormEvent) { event.preventDefault(); setLoading(true); setMessage(''); try { const result = await parseResponse(await fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...loginForm, area: 'ADMIN' }) })); localStorage.setItem('adminUser', JSON.stringify(result.user)); setAdminUser(result.user); setLoginForm({ username: '', password: '' }); } catch (error) { setMessage(error instanceof Error ? error.message : 'ورود ناموفق بود.'); } finally { setLoading(false); } }
  async function post(path: string, body: Record<string, unknown> = {}) { try { const result = await parseResponse(await fetch(`${API_BASE}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })); setMessage(result?.message ?? 'عملیات انجام شد.'); await load(); } catch (error) { setMessage(error instanceof Error ? error.message : 'عملیات ناموفق بود.'); } }
  async function patch(path: string, body: Record<string, unknown> = {}) { try { const result = await parseResponse(await fetch(`${API_BASE}${path}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })); setMessage(result?.message ?? 'عملیات انجام شد.'); await load(); } catch (error) { setMessage(error instanceof Error ? error.message : 'عملیات ناموفق بود.'); } }
  useEffect(() => { if (adminUser) void load(); }, [adminUser?.id]);
  const totals = useMemo(() => data?.stats ?? {}, [data]);
  const refsForTask = (taskId?: string) => (data?.referrals ?? []).filter((r) => r.taskId === taskId);

  function logout() { localStorage.removeItem('adminUser'); setAdminUser(null); setData(null); }
  function toggleStage(stage: string, source: string[], setter: (next: string[]) => void) { setter(source.includes(stage) ? source.filter((item) => item !== stage) : [...source, stage]); }
  async function createCustomer() { await post('/admin/customers', customerForm); setCustomerForm({ code: '', name: '', phone: '', address: '', notes: '' }); }
  async function submitOrder() { const payload = orderForm.customerMode === 'existing' ? { customerMode: 'existing', customerId: orderForm.selectedCustomerId } : { customerMode: 'new', customerCode: toLatinDigits(orderForm.customerCode), customerName: orderForm.customerName, customerPhone: toLatinDigits(orderForm.customerPhone) }; await post('/admin/orders', { ...payload, orderCode: toLatinDigits(orderForm.orderCode), settlementType: orderForm.settlementType, rollerCodes: toLatinDigits(orderForm.rollerCodes).split(/[،,]/).map((item) => item.trim()).filter(Boolean), requiredStages: orderForm.requiredStages, stageEstimates: { ...orderForm.stageEstimates, ارسال: orderForm.stageEstimates['ارسال'] || 1 } }); setShowOrderModal(false); }
  async function createWorker() { await post('/admin/workers', workerForm); setWorkerForm(emptyWorker); setWorkerModalMode(null); setSelectedWorker(null); }
  async function saveWorker() { if (!selectedWorker) return; await patch(`/admin/workers/${selectedWorker.worker.id}`, workerForm); setWorkerModalMode(null); setSelectedWorker(null); setWorkerForm(emptyWorker); }
  function startEditWorker(report: WorkerReport) { setSelectedWorker(report); setWorkerForm({ username: report.worker.username, password: '', fullName: report.worker.fullName, firstName: report.worker.firstName ?? '', lastName: report.worker.lastName ?? '', role: report.worker.role, active: report.worker.active, skills: report.worker.skills, phone: report.worker.phone ?? '', baleUserId: report.worker.baleUserId ?? '', profileImageUrl: report.worker.profileImageUrl ?? '', notes: report.worker.notes ?? '' }); setWorkerModalMode('edit'); }

  if (!adminUser) return <LoginPage loginForm={loginForm} setLoginForm={setLoginForm} login={login} message={message} loading={loading} />;
  if (loading && !data) return <main className="page" dir="rtl"><div className="loading">در حال دریافت اطلاعات...</div></main>;
  if (!data) return <main className="page" dir="rtl"><div className="notice error">{message || 'اطلاعاتی وجود ندارد.'}</div></main>;

  const menuItems: Array<{ key: Tab; label: string; badge?: number }> = [
    { key: 'dashboard', label: 'داشبورد' },
    { key: 'activities', label: 'تابلوی فعالیت‌ها' },
    { key: 'staff', label: 'کارکنان' },
    { key: 'attendance', label: 'حضور و غیاب' },
    { key: 'customers', label: 'مشتریان' },
    { key: 'orders', label: 'سفارش‌ها' },
    { key: 'referrals', label: 'ارجاعات', badge: data.stats?.openReferralCount },
    { key: 'notifications', label: 'اعلان‌ها', badge: data.unreadNotificationCount },
  ];

  return (
    <main className="page admin-layout" dir="rtl">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-mark">ک</span>
          <div>
            <p className="eyebrow">پنل مدیریت</p>
            <h1>{data.workshopName}</h1>
          </div>
        </div>
        <nav className="side-menu" aria-label="منوی اصلی پنل مدیریت">
          {menuItems.map((item) => (
            <button key={item.key} className={tab === item.key ? 'active' : ''} onClick={() => setTab(item.key)}>
              <span>{item.label}</span>
              {!!item.badge && item.badge > 0 && <b>{item.badge}</b>}
            </button>
          ))}
        </nav>
        <div className="sidebar-user">
          <Avatar user={adminUser} />
          <div>
            <strong>{adminUser.fullName}</strong>
            <span>{roleLabel(adminUser.role)}</span>
          </div>
        </div>
      </aside>

      <section className="admin-main">
        <header className="hero"><div><p className="eyebrow">فضای کاری مدیر</p><h1>{menuItems.find((item) => item.key === tab)?.label}</h1><p>منوهای اصلی در سایدبار قرار گرفتند و زیرمنوهای هر بخش در بالای محتوای همان صفحه نمایش داده می‌شوند.</p></div><div className="hero-actions"><span className="connection">{adminUser.fullName}</span><button onClick={() => load()}>بروزرسانی</button><button onClick={logout}>خروج</button></div></header>
        {message && <section className="notice">{message}</section>}
        <section className="content-area">
          {tab === 'dashboard' && <Dashboard data={data} totals={totals} />}
          {tab === 'activities' && <ActivitiesTab data={data} subTab={activitySubTab} setSubTab={setActivitySubTab} setSelectedTask={setSelectedTask} />}
          {tab === 'staff' && <StaffTab data={data} startEditWorker={startEditWorker} openCreateWorker={() => { setSelectedWorker(null); setWorkerForm(emptyWorker); setWorkerModalMode('create'); }} openProfile={(report: WorkerReport) => { setSelectedWorker(report); setWorkerModalMode('profile'); }} />}
          {tab === 'attendance' && <AttendanceTab data={data} />}
          {tab === 'customers' && <CustomersTab data={data} customerForm={customerForm} setCustomerForm={setCustomerForm} createCustomer={createCustomer} />}
          {tab === 'orders' && <OrdersTab data={data} openCreateOrder={() => setShowOrderModal(true)} subTab={ordersSubTab} setSubTab={setOrdersSubTab} setSelectedTask={setSelectedTask} refsForTask={refsForTask} />}
          {tab === 'referrals' && <ReferralsTab data={data} post={post} />}
          {tab === 'notifications' && <NotificationsTab data={data} post={post} />}
        </section>
        {selectedTask && <TaskModal task={selectedTask} referrals={refsForTask(selectedTask.id)} onClose={() => setSelectedTask(null)} />}
        {showOrderModal && <OrderCreateModal data={data} orderForm={orderForm} setOrderForm={setOrderForm} toggleStage={toggleStage} submitOrder={submitOrder} onClose={() => setShowOrderModal(false)} />}
        {workerModalMode === 'create' && <WorkerFormModal title='ثبت کاربر جدید' workerForm={workerForm} setWorkerForm={setWorkerForm} toggleStage={toggleStage} onSubmit={createWorker} submitLabel='ساخت اکانت' onClose={() => { setWorkerModalMode(null); setWorkerForm(emptyWorker); }} />}
        {workerModalMode === 'edit' && selectedWorker && <WorkerFormModal title={`ویرایش ${selectedWorker.worker.fullName}`} workerForm={workerForm} setWorkerForm={setWorkerForm} toggleStage={toggleStage} onSubmit={saveWorker} submitLabel='ذخیره تغییرات' onClose={() => { setWorkerModalMode(null); setSelectedWorker(null); setWorkerForm(emptyWorker); }} />}
        {workerModalMode === 'profile' && selectedWorker && <div className='modal-backdrop'><section className='modal wide-modal'><button className='close' onClick={() => { setWorkerModalMode(null); setSelectedWorker(null); }}>×</button><WorkerProfile report={selectedWorker} /></section></div>}
      </section>
    </main>
  );
}

function LoginPage({ loginForm, setLoginForm, login, message, loading }: any) { return <main className="page login-page" dir="rtl"><form className="login-card" onSubmit={login}><p className="eyebrow">ورود پنل ادمین</p><h1>کارگاه تراشکاری</h1><p className="muted">با نام کاربری و رمز عبور مدیر یا مسئول دفتر وارد شوید.</p>{message && <div className="notice error">{message}</div>}<label>نام کاربری<input value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} placeholder="manager" /></label><label>رمز عبور<input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="admin123" /></label><button className="primary login-button" disabled={loading}>{loading ? 'در حال ورود...' : 'ورود به پنل مدیریت'}</button><p className="hint">اکانت تست: manager / رمز: admin123</p></form></main>; }
function Dashboard({ data, totals }: { data: AdminData; totals: Record<string, number> }) { return <section className="dashboard-sections"><section className="stat-grid"><Stat title="سفارش‌ها" value={totals.orderCount ?? 0} /><Stat title="فعالیت آماده" value={totals.readyTaskCount ?? 0} /><Stat title="در حال انجام" value={totals.inProgressTaskCount ?? 0} /><Stat title="متوقف" value={totals.blockedTaskCount ?? 0} tone="danger" /><Stat title="دارای تأخیر" value={totals.delayedTaskCount ?? 0} tone="danger" /><Stat title="ارجاع باز" value={totals.openReferralCount ?? 0} /></section><section className="grid two"><div className="card"><h2>اقدامات فوری</h2>{data.referrals.slice(0, 5).map((r) => <div className="small-row" key={r.id}><strong>{r.title}</strong><span>{r.description}</span><span>{roleLabel(r.targetRole)} / {r.status}</span></div>)}</div><div className="card"><h2>اعلان‌های اخیر</h2>{data.notifications.slice(0, 5).map((n) => <div className="small-row" key={n.id}><strong>{n.title}</strong><span>{n.message}</span></div>)}</div></section><section className="grid two"><div className="card"><h2>حضور امروز</h2>{data.workerReports.slice(0, 8).map((r) => <div className="small-row" key={r.worker.id}><strong>{r.worker.fullName}</strong><span>{r.attendance?.lastState ?? 'ثبت نشده'} / اضافه‌کاری ماه: {r.monthlyOvertimeMinutes} دقیقه</span></div>)}</div><div className="card"><h2>سفارش‌های فعال</h2>{data.openOrders.slice(0, 5).map((o) => <div className="small-row" key={o.code}><strong>سفارش {o.code} - {o.customerName}</strong><div className="progress"><span style={{ width: `${o.progressPercent}%` }} /></div><span>{o.progressPercent}% تکمیل</span></div>)}</div></section></section>; }
function Stat({ title, value, tone }: { title: string; value: number; tone?: 'danger' }) { return <div className={`stat ${tone ?? ''}`}><span>{title}</span><strong>{value}</strong></div>; }
function ActivitiesTab({ data, subTab, setSubTab, setSelectedTask }: { data: AdminData; subTab: ActivitySubTab; setSubTab: (v: ActivitySubTab) => void; setSelectedTask: (t: Task) => void }) { return <section><div className="segmented"><button className={subTab === 'current' ? 'active' : ''} onClick={() => setSubTab('current')}>فعالیت‌های جاری</button><button className={subTab === 'closed' ? 'active' : ''} onClick={() => setSubTab('closed')}>فعالیت‌های بسته‌شده</button></div><section className="kanban">{data.kanban.map((column) => <div className="kanban-column" key={column.stage}><h2>{column.stage}</h2>{subTab === 'current' ? <><ColumnGroup title="آماده انجام" tasks={column.ready} setSelectedTask={setSelectedTask} /><ColumnGroup title="در حال انجام" tasks={column.inProgress} setSelectedTask={setSelectedTask} /><ColumnGroup title="متوقف" tasks={column.blocked} danger setSelectedTask={setSelectedTask} /></> : <ColumnGroup title="بسته‌شده" tasks={column.closed} setSelectedTask={setSelectedTask} />}</div>)}</section></section>; }
function ColumnGroup({ title, tasks, danger, setSelectedTask }: { title: string; tasks: Task[]; danger?: boolean; setSelectedTask: (t: Task) => void }) { return <div className="column-group"><h3>{title} <small>{tasks.length}</small></h3>{tasks.length === 0 ? <p className="muted">خالی</p> : tasks.map((task) => <article onClick={() => setSelectedTask(task)} className={`kanban-card ${danger ? 'danger' : ''} ${taskTone(task)}`} key={task.id}><strong>سفارش {task.orderCode} / نورد {task.rollerId}</strong><span>{task.customerName}</span><span>کارگر: {task.worker || '-'}</span><span>شروع: {formatDate(task.startedAt)} {formatTime(task.startedAt)}</span><span>مهلت: {formatDate(task.dueAt)} / {task.estimatedDays} روز</span>{task.delayed && <b className="red">تاخیر خورده</b>}</article>)}</div>; }
function StaffTab({ data, startEditWorker, openCreateWorker, openProfile }: { data: AdminData; startEditWorker: (report: WorkerReport) => void; openCreateWorker: () => void; openProfile: (report: WorkerReport) => void }) { return <section><section className="card"><div className="section-header"><div><p className="eyebrow">مدیریت کارکنان</p><h2>کارکنان و گزارش عملکرد</h2></div><button className="primary" onClick={openCreateWorker}>ثبت کاربر جدید</button></div><div className="worker-grid">{data.workerReports.map((report: WorkerReport) => <article className="worker-card" key={report.worker.id}><div className="worker-head"><Avatar user={report.worker} /><div><strong>{report.worker.fullName}</strong><span>{report.worker.username} / {roleLabel(report.worker.role)}</span></div></div><span>مهارت‌ها: {report.worker.skills.join('، ') || 'بدون مهارت'}</span><span>تلفن: {report.worker.phone || '-'}</span><span>آیدی بله: {report.worker.baleUserId || '-'}</span><div className="worker-metrics"><span>امروز: {report.todayDone}</span><span>کل انجام‌شده: {report.monthDone}</span><span>میانگین: {report.averageTaskMinutes} دقیقه</span><span>پاداش ماه: {money(report.monthlyRewardAmount)} تومان</span></div>{report.currentTask ? <p className="current">فعالیت جاری: سفارش {report.currentTask.orderCode} / نورد {report.currentTask.rollerId} / {report.currentTask.stage}</p> : <p className="muted">فعالیت جاری ندارد.</p>}<div className="actions"><button onClick={() => startEditWorker(report)}>ویرایش</button><button className="primary" onClick={() => openProfile(report)}>مشاهده شناسنامه</button></div></article>)}</div></section></section>; }

function getAttendanceDays(data: AdminData) {
  const dayMap = new Map<string, { date: string; rows: Array<{ worker: User; row: AttendanceRow }> }>();
  for (const report of data.workerReports) {
    for (const row of report.attendanceMonth || []) {
      if (!dayMap.has(row.shiftDateFa)) dayMap.set(row.shiftDateFa, { date: row.shiftDateFa, rows: [] });
      dayMap.get(row.shiftDateFa)!.rows.push({ worker: report.worker, row });
    }
  }
  return Array.from(dayMap.values()).sort((a, b) => a.date.localeCompare(b.date, 'fa'));
}
function AttendanceTab({ data }: { data: AdminData }) {
  const days = getAttendanceDays(data);
  const totalReward = data.workerReports.reduce((sum, report) => sum + (report.monthlyRewardAmount || 0), 0);
  const totalOvertime = data.workerReports.reduce((sum, report) => sum + (report.monthlyOvertimeMinutes || 0), 0);
  return <section>
    <section className="card"><div className="section-header"><div><p className="eyebrow">تقویم حضور و غیاب</p><h2>نمای ماهانه کارکنان</h2></div></div><div className="attendance-summary"><div><span>تعداد کارکنان</span><strong>{data.workers.length}</strong></div><div><span>جمع اضافه‌کاری ماه</span><strong>{totalOvertime} دقیقه</strong></div><div><span>جمع پاداش ماه</span><strong>{money(totalReward)} تومان</strong></div></div>{days.length === 0 ? <p className="empty-state">هنوز ورود و خروجی برای این ماه ثبت نشده است.</p> : <div className="attendance-calendar">{days.map((day) => { const presentIds = new Set(day.rows.map((item) => item.worker.id)); const absent = data.workers.filter((worker) => !presentIds.has(worker.id)); return <article className="attendance-day" key={day.date}><header><strong>{day.date}</strong><span>{day.rows.length} حاضر / {absent.length} غایب</span></header><div className="attendance-events">{day.rows.map(({ worker, row }) => <div className="attendance-event" key={`${day.date}-${worker.id}`}><b>{worker.fullName}</b><span>ورود: {formatTime(row.checkInAt)} / خروج: {formatTime(row.checkOutAt)}</span><small>خروج موقت: {row.tempExitCount} بار / اضافه‌کاری: {row.overtimeMinutes} دقیقه / پاداش: {money(row.totalRewardAmount)} تومان</small></div>)}</div>{absent.length > 0 && <div className="absent-box"><b>غایب‌ها:</b> {absent.map((worker) => worker.fullName).join('، ')}</div>}</article>; })}</div>}</section>
  </section>;
}
function WorkerAttendanceCalendar({ report }: { report: WorkerReport }) {
  return <div><div className="attendance-summary"><div><span>جمع اضافه‌کاری ماه</span><strong>{report.monthlyOvertimeMinutes} دقیقه</strong></div><div><span>جمع پاداش ماه</span><strong>{money(report.monthlyRewardAmount)} تومان</strong></div><div><span>روزهای دارای ثبت</span><strong>{report.attendanceMonth.length}</strong></div></div>{report.attendanceMonth.length === 0 ? <p className="muted">برای این ماه داده‌ای ثبت نشده است.</p> : <div className="attendance-calendar worker-only">{report.attendanceMonth.map((row) => <article className="attendance-day" key={row.id}><header><strong>{row.shiftDateFa}</strong><span>{row.lastState}</span></header><div className="attendance-event"><b>{report.worker.fullName}</b><span>ورود: {formatTime(row.checkInAt)} / خروج: {formatTime(row.checkOutAt)}</span><small>خروج موقت: {row.tempExitCount} بار / اضافه‌کاری: {row.overtimeMinutes} دقیقه / پاداش: {money(row.totalRewardAmount)} تومان</small>{row.notes && <small>توضیح: {row.notes}</small>}</div></article>)}</div>}</div>;
}

function UserForm({ workerForm, setWorkerForm, toggleStage }: any) { return <><div className="form-grid"><label>نام کاربری<input value={workerForm.username} onChange={(e) => setWorkerForm({ ...workerForm, username: e.target.value })} /></label><label>رمز عبور<input type="password" value={workerForm.password} onChange={(e) => setWorkerForm({ ...workerForm, password: e.target.value })} placeholder="برای ویرایش، خالی بماند یعنی تغییر نکند" /></label><label>نام<input value={workerForm.firstName} onChange={(e) => setWorkerForm({ ...workerForm, firstName: e.target.value })} /></label><label>نام خانوادگی<input value={workerForm.lastName} onChange={(e) => setWorkerForm({ ...workerForm, lastName: e.target.value })} /></label><label>نام و نام خانوادگی<input value={workerForm.fullName} onChange={(e) => setWorkerForm({ ...workerForm, fullName: e.target.value })} /></label><label>شماره تلفن<input value={workerForm.phone} onChange={(e) => setWorkerForm({ ...workerForm, phone: e.target.value })} /></label><label>آیدی بله<input value={workerForm.baleUserId} onChange={(e) => setWorkerForm({ ...workerForm, baleUserId: e.target.value })} /></label><label>تصویر پروفایل<input type="file" accept="image/*" onChange={async (e) => { const file = e.target.files?.[0]; if (!file) return; const profileImageUrl = await fileToDataUrl(file); setWorkerForm({ ...workerForm, profileImageUrl }); }} /></label>{workerForm.profileImageUrl && <div className="profile-upload-preview"><img src={workerForm.profileImageUrl} alt="پیش‌نمایش تصویر پروفایل" /><span>تصویر انتخاب شد</span></div>}<label>نقش<select value={workerForm.role} onChange={(e) => setWorkerForm({ ...workerForm, role: e.target.value, skills: e.target.value === 'SUPPLY' ? ['تامین'] : workerForm.skills.filter((s: string) => s !== 'تامین') })}><option value="WORKER">کارگر</option><option value="SUPPLY">تأمین</option><option value="OFFICE">مسئول دفتر</option><option value="MANAGER">مدیر</option></select></label><label>وضعیت<select value={workerForm.active ? 'true' : 'false'} onChange={(e) => setWorkerForm({ ...workerForm, active: e.target.value === 'true' })}><option value="true">فعال</option><option value="false">غیرفعال</option></select></label><label className="wide">توضیحات<input value={workerForm.notes} onChange={(e) => setWorkerForm({ ...workerForm, notes: e.target.value })} /></label></div><h3>مهارت‌ها</h3><div className="stage-selector">{SKILLS.map((stage) => <label key={stage} className="check-pill"><input type="checkbox" checked={workerForm.skills.includes(stage)} onChange={() => toggleStage(stage, workerForm.skills, (skills: string[]) => setWorkerForm({ ...workerForm, skills }))} />{stage}</label>)}</div></>; }
function WorkerProfile({ report }: { report: WorkerReport }) {
  const [view, setView] = useState<'profile' | 'attendance'>('profile');
  return <section className="card">
    <div className="section-header"><div><p className="eyebrow">شناسنامه کاربر</p><h2>{report.worker.fullName}</h2></div><div className="segmented"><button className={view === 'profile' ? 'active' : ''} onClick={() => setView('profile')}>اطلاعات و فعالیت‌ها</button><button className={view === 'attendance' ? 'active' : ''} onClick={() => setView('attendance')}>ورود و خروج</button></div></div>
    {view === 'profile' ? <div className="grid two"><div><h3>تاریخچه فعالیت‌ها</h3>{report.activityHistory.length === 0 ? <p className="muted">فعالیتی ثبت نشده است.</p> : report.activityHistory.slice(0, 12).map((t) => <div className="small-row" key={t.id}><strong>{t.stage} / سفارش {t.orderCode} / نورد {t.rollerId}</strong><span>{t.statusLabel} / شروع {formatDate(t.startedAt)} {formatTime(t.startedAt)} / پایان {formatDate(t.finishedAt)} {formatTime(t.finishedAt)}</span></div>)}</div><div><h3>اطلاعات کاربر</h3><div className="profile-grid"><span>نام کاربری: {report.worker.username}</span><span>نقش: {roleLabel(report.worker.role)}</span><span>مهارت‌ها: {report.worker.skills.join('، ') || '-'}</span><span>شماره تماس: {report.worker.phone || '-'}</span><span>آیدی بله: {report.worker.baleUserId || '-'}</span><span>وضعیت: {report.worker.active ? 'فعال' : 'غیرفعال'}</span></div></div></div> : <WorkerAttendanceCalendar report={report} />}
  </section>;
}
function CustomersTab({ data, customerForm, setCustomerForm, createCustomer }: any) { return <section><section className="card"><h2>ثبت مشتری جدید</h2><div className="form-grid"><label>کد مشتری<input value={customerForm.code} onChange={(e) => setCustomerForm({ ...customerForm, code: e.target.value })} /></label><label>نام مشتری<input value={customerForm.name} onChange={(e) => setCustomerForm({ ...customerForm, name: e.target.value })} /></label><label>شماره تماس<input value={customerForm.phone} onChange={(e) => setCustomerForm({ ...customerForm, phone: e.target.value })} /></label><label>آدرس<input value={customerForm.address} onChange={(e) => setCustomerForm({ ...customerForm, address: e.target.value })} /></label><label className="wide">توضیحات<input value={customerForm.notes} onChange={(e) => setCustomerForm({ ...customerForm, notes: e.target.value })} /></label></div><button className="primary" onClick={createCustomer}>ثبت مشتری</button></section><section className="card"><h2>لیست مشتریان</h2><div className="table customers-table"><div className="tr head"><span>کد</span><span>نام</span><span>تماس</span><span>آدرس</span></div>{data.customers.map((c: Customer) => <div className="tr" key={c.id}><span>{c.code}</span><span>{c.name}</span><span>{c.phone || '-'}</span><span>{c.address || '-'}</span></div>)}</div></section></section>; }
function OrdersTab({ data, openCreateOrder, subTab, setSubTab, setSelectedTask, refsForTask }: { data: AdminData; openCreateOrder: () => void; subTab: OrdersSubTab; setSubTab: (v: OrdersSubTab) => void; setSelectedTask: (t: Task) => void; refsForTask: (taskId?: string) => Referral[] }) { const orders = subTab === 'open' ? data.openOrders : data.closedOrders; return <section><section className="card"><div className="section-header"><div><p className="eyebrow">مدیریت سفارش‌ها</p><h2>سفارش‌ها</h2></div><button className="primary" onClick={openCreateOrder}>ثبت سفارش جدید</button></div><div className="segmented"><button className={subTab === 'open' ? 'active' : ''} onClick={() => setSubTab('open')}>سفارش‌های باز</button><button className={subTab === 'closed' ? 'active' : ''} onClick={() => setSubTab('closed')}>سفارش‌های بسته‌شده</button></div>{orders.length === 0 ? <p className="empty-state">موردی برای نمایش وجود ندارد.</p> : orders.map((order: Order) => <details className="order-detail" key={order.code}><summary><span>سفارش {order.code} - {order.customerName} - {order.statusLabel}</span><div className="progress"><span style={{ width: `${order.progressPercent}%` }} /></div></summary>{order.rollers.map((roller) => <div className="roller-row" key={roller.id}><strong>نورد {roller.id} — مرحله فعلی: {roller.currentStage}</strong><span>{roller.status}</span><div className="timeline">{roller.tasks.map((task) => <button key={task.id} className={`timeline-step ${taskTone(task)}`} onClick={() => setSelectedTask(task)}>{task.stage}</button>)}</div>{roller.tasks.map((task) => refsForTask(task.id).length > 0 && <span key={task.id} className="ref-hint">{task.stage}: {refsForTask(task.id).length} ارجاع ثبت شده</span>)}</div>)}</details>)}</section></section>; }

function OrderCreateModal({ data, orderForm, setOrderForm, toggleStage, submitOrder, onClose }: any) { return <div className="modal-backdrop"><section className="modal wide-modal"><button className="close" onClick={onClose}>×</button><p className="eyebrow">ثبت سفارش</p><h2>ثبت سفارش جدید</h2><div className="segmented"><button className={orderForm.customerMode === 'existing' ? 'active' : ''} onClick={() => setOrderForm({ ...orderForm, customerMode: 'existing' })}>انتخاب مشتری قبلی</button><button className={orderForm.customerMode === 'new' ? 'active' : ''} onClick={() => setOrderForm({ ...orderForm, customerMode: 'new' })}>ایجاد مشتری جدید</button></div><div className="form-grid">{orderForm.customerMode === 'existing' ? <label className="wide">مشتری<select value={orderForm.selectedCustomerId} onChange={(e) => setOrderForm({ ...orderForm, selectedCustomerId: Number(e.target.value) })}>{data.customers.map((c: Customer) => <option value={c.id} key={c.id}>{c.code} - {c.name}</option>)}</select></label> : <><label>کد مشتری<input value={orderForm.customerCode} onChange={(e) => setOrderForm({ ...orderForm, customerCode: e.target.value })} /></label><label>نام مشتری<input value={orderForm.customerName} onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })} /></label><label>شماره تماس<input value={orderForm.customerPhone} onChange={(e) => setOrderForm({ ...orderForm, customerPhone: e.target.value })} /></label></>}<label>کد سفارش<input value={orderForm.orderCode} onChange={(e) => setOrderForm({ ...orderForm, orderCode: e.target.value })} /></label><label>نوع حساب<select value={orderForm.settlementType} onChange={(e) => setOrderForm({ ...orderForm, settlementType: e.target.value })}><option value="CREDIT">اعتباری</option><option value="CASH">نقدی</option></select></label><label className="wide">کد نوردها، جداشده با ویرگول<input value={orderForm.rollerCodes} onChange={(e) => setOrderForm({ ...orderForm, rollerCodes: e.target.value })} /></label></div><h3>فعالیت‌های سفارش و تخمین زمان</h3><div className="stage-estimates">{ORDER_STAGES.map((stage) => <div className="estimate-row" key={stage}><label className="check-pill"><input type="checkbox" checked={orderForm.requiredStages.includes(stage)} onChange={() => toggleStage(stage, orderForm.requiredStages, (requiredStages: string[]) => setOrderForm({ ...orderForm, requiredStages }))} />{stage}</label><input type="text" inputMode="numeric" value={toFaDigits(orderForm.stageEstimates[stage] || 1)} onChange={(e) => setOrderForm({ ...orderForm, stageEstimates: { ...orderForm.stageEstimates, [stage]: parseFaNumber(e.target.value) } })} /><span>روز</span></div>)}<div className="estimate-row locked"><label className="check-pill locked"><input type="checkbox" checked disabled />ارسال — اجباری</label><input type="text" inputMode="numeric" value={toFaDigits(orderForm.stageEstimates['ارسال'] || 1)} onChange={(e) => setOrderForm({ ...orderForm, stageEstimates: { ...orderForm.stageEstimates, ارسال: parseFaNumber(e.target.value) } })} /><span>روز</span></div></div><div className="actions"><button className="primary" onClick={submitOrder}>ثبت سفارش و انتشار مرحله اول روی تابلو</button><button onClick={onClose}>انصراف</button></div></section></div>; }
function WorkerFormModal({ title, workerForm, setWorkerForm, toggleStage, onSubmit, submitLabel, onClose }: any) { return <div className="modal-backdrop"><section className="modal wide-modal"><button className="close" onClick={onClose}>×</button><p className="eyebrow">مدیریت کاربر</p><h2>{title}</h2><UserForm workerForm={workerForm} setWorkerForm={setWorkerForm} toggleStage={toggleStage} /><div className="actions"><button className="primary" onClick={onSubmit}>{submitLabel}</button><button onClick={onClose}>انصراف</button></div></section></div>; }
function ReferralsTab({ data, post }: { data: AdminData; post: (path: string, body?: Record<string, unknown>) => Promise<void> }) { return <section className="card"><h2>مرکز ارجاعات</h2><div className="list">{data.referrals.map((r) => <div className="row referral-row" key={r.id}><div><strong>{r.title}</strong><span>{r.description}</span><span>سفارش {r.orderCode || '-'} / نورد {r.rollerId || '-'} / مقصد: {roleLabel(r.targetRole)} / وضعیت: {r.status}</span>{r.messages?.map((m) => <small key={m.id}>{m.authorName || m.authorRole}: {m.message}</small>)}</div><div className="actions">{r.targetRole === 'MANAGER' && r.status === 'OPEN' && <button className="primary" onClick={() => post(`/admin/referrals/${r.id}/assign-supply`, { note: 'نیاز به بررسی و تأمین دارد.' })}>ارجاع به تأمین</button>}{r.status === 'WAITING_ADMIN_RETURN' && <button className="primary" onClick={() => post(`/admin/referrals/${r.id}/return-to-worker`, { note: 'مشکل رفع شد؛ فعالیت به انجام‌دهنده قبلی برگردانده شد.' })}>بازگشت به انجام‌دهنده</button>}<button onClick={() => post(`/referrals/${r.id}/status`, { status: 'IN_PROGRESS', note: 'پیگیری آغاز شد' })}>شروع پیگیری</button><button onClick={() => post(`/referrals/${r.id}/status`, { status: 'DONE', note: 'انجام شد' })}>انجام شد</button></div></div>)}</div></section>; }
function NotificationsTab({ data, post }: { data: AdminData; post: (path: string, body?: Record<string, unknown>) => Promise<void> }) { return <section className="card"><div className="section-header"><h2>اعلان‌ها</h2><button onClick={() => post('/admin/notifications/read-all')}>خواندن همه</button></div><div className="list">{data.notifications.map((n) => <div className="row" key={n.id}><div><strong>{n.title}</strong><span>{n.message}</span></div><div className="actions"><span className={n.isRead ? 'badge' : 'badge warn'}>{n.isRead ? 'خوانده‌شده' : 'جدید'} / {roleLabel(n.targetRole)}</span>{!n.isRead && <button onClick={() => post(`/admin/notifications/${n.id}/read`)}>خواندم</button>}</div></div>)}</div></section>; }
function TaskModal({ task, referrals, onClose }: { task: Task; referrals: Referral[]; onClose: () => void }) { return <div className="modal-backdrop"><section className="modal wide-modal"><button className="close" onClick={onClose}>×</button><p className="eyebrow">شناسنامه فعالیت</p><h2>{task.stage} / سفارش {task.orderCode} / نورد {task.rollerId}</h2><div className="profile-grid"><span>کد فعالیت: {task.activityCode || task.id}</span><span>وضعیت: {task.statusLabel}</span><span>کارگر تخصیص‌یافته: {task.worker || '-'}</span><span>شروع: {formatDate(task.startedAt)} {formatTime(task.startedAt)}</span><span>پایان: {formatDate(task.finishedAt)} {formatTime(task.finishedAt)}</span><span>تخمین: {task.estimatedDays} روز</span><span>مهلت: {formatDate(task.dueAt)}</span><span>{task.completedEarly ? 'زودتر از زمان تخمینی انجام شده' : task.delayed ? 'این فعالیت تأخیر خورده است' : 'وضعیت زمان‌بندی عادی'}</span></div>{task.blockedReason && <div className="warning-box">علت توقف: {task.blockedReason}</div>}<h3>ارجاعات این فعالیت</h3>{referrals.length === 0 ? <p className="muted">ارجاعی برای این فعالیت ثبت نشده است.</p> : referrals.map((r) => <div className="small-row" key={r.id}><strong>{r.title}</strong><span>{r.description}</span><span>مقصد: {roleLabel(r.targetRole)} / وضعیت: {r.status}</span></div>)}</section></div>; }
