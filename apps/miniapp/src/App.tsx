import { FormEvent, useEffect, useMemo, useState } from 'react';
import './styles.css';

const API_BASE = 'http://localhost:3000/api';

const PERSIAN_DIGITS = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
function toFaDigits(value: unknown) { return String(value ?? '').replace(/[0-9]/g, (digit) => PERSIAN_DIGITS[Number(digit)]); }
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
function Avatar({ user }: { user?: { fullName?: string; profileImageUrl?: string } }) {
  const initial = (user?.fullName || '؟').slice(0, 1);
  return <div className="avatar">{user?.profileImageUrl ? <img src={user.profileImageUrl} alt={user.fullName || 'تصویر کاربر'} /> : initial}</div>;
}


type Worker = { id: number; username: string; fullName: string; role: string; active: boolean; skills: string[]; phone?: string; baleUserId?: string; profileImageUrl?: string };
type Task = { id: string; rollerId: string; orderCode: string; customerName: string; stage: string; status: string; statusLabel: string; worker?: string; startedAt?: string; availableAt?: string; dueAt?: string; blockedReason?: string; durationMinutes?: number; estimatedDays?: number; completedEarly?: boolean; delayed?: boolean };
type Referral = { id: number; title: string; description: string; status: string; targetRole: string; orderCode?: string; rollerId?: string; taskId?: string };
type WorkerDashboard = {
  apiConnected: boolean;
  workshopName: string;
  selectedWorker: Worker;
  currentTask: Task | null;
  availableTasks: Task[];
  blockedTasks: Task[];
  canPickNewTask: boolean;
  canWorkToday: boolean;
  attendanceState: string;
  pendingPreviousShift?: { id: number; shiftDate: string; shiftDateFa: string; lastState: string } | null;
  attendanceSummary: { lastState: string; shiftDateFa?: string; overtimeMinutes?: number; totalRewardAmount?: number; tempExitCount?: number; notes?: string };
  rewards: Array<{ id: number; reason: string; amount: number; createdAt: string }>;
  events: Array<{ id: number; type: string; note?: string; eventAt: string; eventDateFa?: string; eventTimeFa?: string }>;
  referrals: Referral[];
};

function formatTime(value?: string) {
  if (!value) return '-';
  return new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit' }).format(new Date(value));
}
function formatDate(value?: string) {
  if (!value) return '-';
  return new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value));
}
function formatMoney(value?: number) { return new Intl.NumberFormat('fa-IR').format(value ?? 0); }
function roleLabel(role: string) { return ({ WORKER: 'کارگر', SUPPLY: 'تأمین', SHIPPING: 'ارسال' } as Record<string, string>)[role] ?? role; }

async function parseResponse(response: Response) {
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.message ?? 'خطا در ارتباط با سرور';
    throw new Error(Array.isArray(message) ? message.join('، ') : message);
  }
  return data;
}

function readStoredUser(): Worker | null {
  const raw = localStorage.getItem('workerUser');
  if (!raw) return null;
  try { return JSON.parse(raw) as Worker; } catch { return null; }
}

export default function App() {
  usePersianDigits();
  const [user, setUser] = useState<Worker | null>(() => readStoredUser());
  const [data, setData] = useState<WorkerDashboard | null>(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [issueText, setIssueText] = useState('');
  const [supplyNote, setSupplyNote] = useState('');
  const [tempExitOpen, setTempExitOpen] = useState(false);
  const [tempExitReason, setTempExitReason] = useState('');
  const [manualCheckoutOpen, setManualCheckoutOpen] = useState(false);
  const [manualCheckoutTime, setManualCheckoutTime] = useState('17:00');
  const [manualCheckoutNote, setManualCheckoutNote] = useState('ثبت دستی خروج روز قبل');

  const currentWorker = data?.selectedWorker ?? user;
  const skillsText = useMemo(() => currentWorker?.skills.join('، ') || 'بدون مهارت', [currentWorker]);

  async function load(activeUser = user) {
    if (!activeUser) return;
    setLoading(true);
    try {
      const nextData = await parseResponse(await fetch(`${API_BASE}/miniapp/bootstrap?userId=${activeUser.id}`));
      setData(nextData);
      setUser(nextData.selectedWorker);
      localStorage.setItem('workerUser', JSON.stringify(nextData.selectedWorker));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'خطا در دریافت اطلاعات');
    } finally {
      setLoading(false);
    }
  }

  async function login(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const result = await parseResponse(await fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...loginForm, area: 'WORKER' }) }));
      localStorage.setItem('workerUser', JSON.stringify(result.user));
      setUser(result.user);
      setLoginForm({ username: '', password: '' });
      await load(result.user);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'ورود ناموفق بود.');
    } finally {
      setLoading(false);
    }
  }

  async function post(path: string, body: Record<string, unknown>) {
    try {
      const result = await parseResponse(await fetch(`${API_BASE}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }));
      setMessage(result?.message ?? 'عملیات با موفقیت انجام شد.');
      setIssueText('');
      setSupplyNote('');
      await load();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'عملیات ناموفق بود.');
    }
  }

  useEffect(() => { if (user) void load(user); }, []);

  function logout() {
    localStorage.removeItem('workerUser');
    setUser(null);
    setData(null);
  }

  if (!user) {
    return (
      <main className="page login-page" dir="rtl">
        <form className="login-card" onSubmit={login}>
          <p className="eyebrow">ورود پنل کارگر و تأمین</p>
          <h1>کارگاه تراشکاری</h1>
          <p className="muted">با نام کاربری و رمز عبوری که ادمین برایت ساخته وارد شو.</p>
          {message && <div className="notice error">{message}</div>}
          <label>نام کاربری<input value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} placeholder="مثلاً ali.rezaei" /></label>
          <label>رمز عبور<input type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="رمز عبور" /></label>
          <button className="primary login-button" disabled={loading}>{loading ? 'در حال ورود...' : 'ورود به پنل'}</button>
          <p className="hint">اکانت تست: ali.rezaei / رمز: 123456</p>
        </form>
      </main>
    );
  }

  if (loading && !data) return <main className="page"><div className="loading">در حال دریافت اطلاعات...</div></main>;
  if (!data || !currentWorker) return <main className="page"><div className="error-card">{message || 'اطلاعاتی برای نمایش وجود ندارد.'}<button onClick={logout}>خروج</button></div></main>;

  const isSupply = currentWorker.role === 'SUPPLY';
  const attendanceState = data.attendanceSummary.lastState;
  const hasPendingPrevious = Boolean(data.pendingPreviousShift);
  const isNotStarted = attendanceState === 'شیفت هنوز شروع نشده است' || attendanceState === 'خروج نهایی';
  const isActiveAttendance = attendanceState === 'حاضر در کارگاه' || attendanceState === 'بازگشت به کار';
  const isTempExited = attendanceState === 'خروج موقت / مرخصی ساعتی';
  const canCheckIn = !hasPendingPrevious && isNotStarted;
  const canTempExit = !hasPendingPrevious && isActiveAttendance;
  const canReturn = !hasPendingPrevious && isTempExited;
  const canCheckOut = !hasPendingPrevious && isActiveAttendance;

  function submitManualPreviousCheckout() {
    if (!data.pendingPreviousShift) return;
    const eventAt = `${data.pendingPreviousShift.shiftDate}T${manualCheckoutTime || '17:00'}:00`;
    void post('/attendance/events', { userId: currentWorker.id, type: 'CHECK_OUT', eventAt, note: manualCheckoutNote || 'ثبت دستی خروج روز قبل' });
    setManualCheckoutOpen(false);
  }

  return (
    <main className="page" dir="rtl">
      <header className="hero">
        <div>
          <p className="eyebrow">{isSupply ? 'پنل تأمین' : 'پنل کارگر / Kanban مرحله‌ای'}</p>
          <h1>{data.workshopName}</h1>
          <p>{isSupply ? 'ارجاعات تأمین را انجام بده و برای ادمین برگردان.' : 'فعالیت‌های مرتبط با مهارت خودت را از تابلو بردار و انجام بده.'}</p>
        </div>
        <div className="header-actions"><span className="connection">{currentWorker.fullName}</span><button onClick={() => load()}>بروزرسانی</button><button onClick={logout}>خروج</button></div>
      </header>

      {message && <section className="notice">{message}</section>}

      <section className="grid two">
        <div className="card profile-card">
          <h2>اکانت فعال</h2>
          <div className="profile-box">
            <Avatar user={currentWorker} />
            <div><strong>{currentWorker.fullName}</strong><span>{roleLabel(currentWorker.role)}</span><span>{isSupply ? 'نقش: تأمین' : `مهارت‌ها: ${skillsText}`}</span></div>
          </div>
        </div>

        {!isSupply && <div className="card attendance-card">
          <h2>حضور امروز</h2>
          <p className="big-state">{data.attendanceState}</p>
          <p className="muted">تاریخ: {data.attendanceSummary.shiftDateFa || 'ثبت نشده'}</p>
          {hasPendingPrevious && <div className="warning-box">شیفت {data.pendingPreviousShift?.shiftDateFa} بدون خروج نهایی باقی مانده است. ابتدا زمان خروج روز قبل را ثبت کنید.</div>}
          {!data.canWorkToday && !hasPendingPrevious && <div className="warning-box">برای برداشتن یا انجام فعالیت، ابتدا حضور خود را ثبت نمایید.</div>}
          <div className="actions wrap">
            <button disabled={!canCheckIn} onClick={() => post('/attendance/events', { userId: currentWorker.id, type: 'CHECK_IN' })}>ثبت ورود</button>
            <button disabled={!canTempExit} onClick={() => setTempExitOpen(true)}>خروج موقت</button>
            <button disabled={!canReturn} onClick={() => post('/attendance/events', { userId: currentWorker.id, type: 'RETURN_TO_WORK' })}>بازگشت</button>
            <button disabled={!canCheckOut} onClick={() => post('/attendance/events', { userId: currentWorker.id, type: 'CHECK_OUT' })}>خروج نهایی</button>
            {hasPendingPrevious && <button className="primary" onClick={() => setManualCheckoutOpen(true)}>ثبت دستی خروج روز قبل</button>}
          </div>
          <div className="mini-stats"><span>پاداش: {formatMoney(data.attendanceSummary.totalRewardAmount)} تومان</span><span>اضافه‌کاری: {data.attendanceSummary.overtimeMinutes ?? 0} دقیقه</span><span>خروج موقت: {data.attendanceSummary.tempExitCount ?? 0}</span></div>
        </div>}
      </section>

      {isSupply ? (
        <section className="card">
          <div className="section-title"><div><p className="eyebrow">کارتابل تأمین</p><h2>ارجاعات ارسالی از ادمین</h2></div><button onClick={() => load()}>بروزرسانی</button></div>
          {data.referrals.length === 0 ? <div className="empty-state">فعلاً ارجاعی برای تأمین وجود ندارد.</div> : data.referrals.map((referral) => (
            <article className="task-card active" key={referral.id}>
              <div><strong>{referral.title}</strong><p>{referral.description}</p><p>سفارش {referral.orderCode || '-'} / نورد {referral.rollerId || '-'}</p></div>
              <div className="actions vertical"><textarea value={supplyNote} onChange={(e) => setSupplyNote(e.target.value)} placeholder="توضیح تأمین انجام‌شده..." /><button className="primary" onClick={() => post(`/supply/referrals/${referral.id}/complete`, { actor: currentWorker.fullName, note: supplyNote || 'تأمین انجام شد.' })}>تأمین انجام شد و ارسال به ادمین</button></div>
            </article>
          ))}
        </section>
      ) : (
        <>
          <section className="card current-work">
            <div className="section-title"><div><p className="eyebrow">فعالیت جاری</p><h2>کار من</h2></div>{!data.canPickNewTask && <span className="badge danger">تا زمان اتمام این فعالیت امکان برداشتن کار جدید ندارید</span>}</div>
            {data.currentTask ? (
              <div className="task-card active">
                <div><strong>سفارش {data.currentTask.orderCode} / نورد {data.currentTask.rollerId}</strong><p>{data.currentTask.customerName}</p><p>مرحله: {data.currentTask.stage}</p><p>شروع: {formatDate(data.currentTask.startedAt)} - {formatTime(data.currentTask.startedAt)}</p><p>مهلت تخمینی: {formatDate(data.currentTask.dueAt)} / {data.currentTask.estimatedDays} روز</p></div>
                <div className="actions vertical"><button className="primary" onClick={() => post(`/tasks/${data.currentTask?.id}/finish`, { userId: currentWorker.id })}>پایان فعالیت</button><details className="issue-panel"><summary>ثبت گزارش مشکل</summary><textarea value={issueText} onChange={(event) => setIssueText(event.target.value)} placeholder="توضیح مشکل را بنویسید..." /><button className="danger" onClick={() => post(`/tasks/${data.currentTask?.id}/issue`, { userId: currentWorker.id, description: issueText || 'مشکل در انجام فعالیت ثبت شد.' })}>ارسال گزارش برای ادمین</button></details></div>
              </div>
            ) : <div className="empty-state">فعالیت جاری ندارید. از تابلوی زیر یک فعالیت مناسب مهارت خودتان بردارید.</div>}
          </section>

          <section className="card"><div className="section-title"><div><p className="eyebrow">تابلوی فعالیت‌های قابل برداشتن</p><h2>{skillsText}</h2></div><button onClick={() => load()}>بروزرسانی</button></div><div className="task-list">{data.availableTasks.length === 0 && <div className="empty-state">فعلاً فعالیت آماده‌ای برای مهارت‌های شما وجود ندارد.</div>}{data.availableTasks.map((task) => <article key={task.id} className="task-card"><div><strong>سفارش {task.orderCode} / نورد {task.rollerId}</strong><p>{task.customerName}</p><p>مرحله: {task.stage}</p><p>مهلت: {task.estimatedDays} روز / تا {formatDate(task.dueAt)}</p>{task.worker && <p>رزرو برای: {task.worker}</p>}<span className={task.delayed ? 'badge danger' : 'badge'}>{task.delayed ? 'دارای تأخیر' : task.statusLabel}</span></div><button className="primary" onClick={() => post(`/tasks/${task.id}/pick`, { userId: currentWorker.id })}>برداشتن فعالیت</button></article>)}</div></section>

          <section className="grid two"><div className="card"><h2>فعالیت‌های متوقف‌شده مرتبط با مهارت شما</h2>{data.blockedTasks.length === 0 ? <p className="muted">موردی وجود ندارد.</p> : data.blockedTasks.map((task) => <div className="small-row" key={task.id}><strong>{task.stage} / سفارش {task.orderCode} / نورد {task.rollerId}</strong><span>{task.blockedReason || 'نیازمند پیگیری ادمین'}</span></div>)}</div><div className="card"><h2>تاریخچه ورود و خروج اخیر</h2>{data.events.length === 0 ? <p className="muted">رویدادی ثبت نشده است.</p> : data.events.map((event) => <div className="small-row" key={event.id}><strong>{event.eventDateFa} - {event.eventTimeFa}</strong><span>{event.type} {event.note ? ` / ${event.note}` : ''}</span></div>)}</div></section>
        </>
      )}

      {tempExitOpen && <div className="modal-backdrop"><div className="modal"><button className="close" onClick={() => { setTempExitOpen(false); setTempExitReason(''); }}>×</button><h2>ثبت خروج موقت</h2><p className="muted">دلیل خروج الزامی است. در صورت انصراف، خروج شما ثبت نخواهد شد.</p><textarea value={tempExitReason} onChange={(e) => setTempExitReason(e.target.value)} placeholder="دلیل خروج موقت را بنویسید..." /><div className="actions"><button className="primary" onClick={() => { if (!tempExitReason.trim()) { setMessage('برای خروج موقت، وارد کردن دلیل خروج الزامی است.'); return; } setTempExitOpen(false); void post('/attendance/events', { userId: currentWorker.id, type: 'TEMP_EXIT', note: tempExitReason }); setTempExitReason(''); }}>ثبت و خروج</button><button onClick={() => { setTempExitOpen(false); setTempExitReason(''); }}>انصراف</button></div></div></div>}
      {manualCheckoutOpen && <div className="modal-backdrop"><div className="modal"><button className="close" onClick={() => setManualCheckoutOpen(false)}>×</button><h2>ثبت دستی خروج روز قبل</h2><p className="muted">برای شروع شیفت امروز، زمان خروج نهایی شیفت {data.pendingPreviousShift?.shiftDateFa} را ثبت کنید.</p><label>زمان خروج<input type="time" value={manualCheckoutTime} onChange={(e) => setManualCheckoutTime(e.target.value)} /></label><label>توضیح<textarea value={manualCheckoutNote} onChange={(e) => setManualCheckoutNote(e.target.value)} placeholder="توضیح ثبت دستی خروج" /></label><div className="actions"><button className="primary" onClick={submitManualPreviousCheckout}>ثبت خروج روز قبل</button><button onClick={() => setManualCheckoutOpen(false)}>انصراف</button></div></div></div>}
    </main>
  );
}
