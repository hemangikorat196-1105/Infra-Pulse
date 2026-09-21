import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FolderKanban, CalendarRange, Activity, ClipboardList, Images, BrainCircuit,
  BarChart3, Bell, Users, Settings, Menu, Sun, Moon, Search, ChevronDown, Building2, LogOut,
  Download, Plus, UploadCloud, Mic, MoreHorizontal, FileText, Eye, CheckCircle2, Clock3,
  AlertTriangle, CircleHelp, Sparkles, ArrowUpRight
} from "lucide-react";
import { Button, Badge, Modal, Toast, Input, Textarea } from "./ui";
import { cn } from "../lib/utils";
import { projects } from "../data/mockData";

export function Logo({ compact=false, light=false }) {
  return <div className="flex items-center gap-2.5">
    <svg width={compact?34:38} height={compact?34:38} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="12" fill={light?"#ffffff":"#0b1730"}/>
      <path d="M12 34h24M15 34V18h8v16M27 34V12h8v22" fill="none" stroke={light?"#0b1730":"#31c7c0"} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 27h7l4-7 5 12 5-10 4 5h7" fill="none" stroke="#f3b33e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    {!compact && <div><div className="font-extrabold tracking-tight text-slate-950 dark:text-white">InfraPulse</div><div className="text-[10px] font-medium text-slate-500">FROM SCHEDULE TO SITE REALITY.</div></div>}
  </div>;
}

const nav = [
  ["Overview", "/dashboard", LayoutDashboard], ["Projects", "/projects", FolderKanban], ["Schedule", "/schedule", CalendarRange],
  ["Site Progress", "/site-progress", Activity], ["Daily Reports", "/daily-reports", ClipboardList],
  ["Photos & Documents", "/photos-documents", Images], ["AI Review", "/ai-review", BrainCircuit],
  ["Analytics", "/analytics", BarChart3], ["Alerts", "/alerts", Bell], ["Team", "/team", Users], ["Settings", "/settings", Settings]
];

export function Sidebar({ collapsed=false }) {
  const loc = useLocation();
  return <aside className={cn("hidden shrink-0 border-r border-slate-200 bg-white md:flex md:flex-col dark:border-slate-800 dark:bg-slate-950", collapsed?"w-20":"w-64")}>
    <div className="flex h-16 items-center px-4">{collapsed?<Logo compact/>:<Logo/>}</div>
    <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
      {nav.map(([label,path,Icon]) => {
        const active = loc.pathname===path || (path!=="/dashboard" && loc.pathname.startsWith(path));
        return <Link key={path} to={path} title={collapsed?label:""} className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition", active?"bg-navy text-white dark:bg-teal dark:text-slate-950":"text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800", collapsed&&"justify-center")}>
          <Icon size={18}/>{!collapsed&&<span>{label}</span>}
          {!collapsed&&label==="AI Review"&&<Badge tone="teal">7</Badge>}
          {!collapsed&&label==="Alerts"&&<span className="ml-auto h-2 w-2 rounded-full bg-red-500"/>}
        </Link>
      })}
    </nav>
    <div className="border-t border-slate-200 p-3 dark:border-slate-800">
      {!collapsed && <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900"><div className="flex items-center gap-2"><CircleHelp size={16}/><span className="text-xs font-semibold">Need help?</span></div><p className="mt-1 text-[11px] text-slate-500">Review the demo workspace and AI queue.</p></div>}
    </div>
  </aside>;
}

export function MobileNav({ open, onClose }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-40 md:hidden">
    <div className="absolute inset-0 bg-slate-950/50" onClick={onClose}/>
    <aside className="relative h-full w-72 bg-white shadow-2xl dark:bg-slate-950">
      <div className="flex h-16 items-center justify-between px-4"><Logo/><button className="btn-ghost h-9 w-9 p-0" onClick={onClose}><XIcon/></button></div>
      <nav className="space-y-1 px-3">
        {nav.map(([label,path,Icon]) => <Link onClick={onClose} key={path} to={path} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><Icon size={18}/>{label}</Link>)}
      </nav>
    </aside>
  </div>;
}
function XIcon(){return <span className="text-xl">×</span>}

export function ThemeToggle({ dark, setDark }) {
  return <button onClick={()=>setDark(!dark)} className="btn-ghost h-9 w-9 rounded-lg p-0" aria-label="Toggle theme">{dark?<Sun size={18}/>:<Moon size={18}/>}</button>;
}

export function ProjectSwitcher({ selected, setSelected }) {
  const p = projects.find(x=>x.id===selected) || projects[0];
  return <label className="relative block">
    <select value={selected} onChange={e=>setSelected(e.target.value)} className="h-10 max-w-[260px] appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-9 text-sm font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      {projects.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}
    </select>
    <ChevronDown className="pointer-events-none absolute right-2.5 top-3 text-slate-400" size={16}/>
  </label>;
}

export function Topbar({ onMenu, dark, setDark, projectId, setProjectId, onExport }) {
  return <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:px-6">
    <button className="btn-ghost h-9 w-9 p-0 md:hidden" onClick={onMenu} aria-label="Open navigation"><Menu size={20}/></button>
    <div className="hidden items-center gap-2 lg:flex"><ProjectSwitcher selected={projectId} setSelected={setProjectId}/></div>
    <div className="ml-auto flex items-center gap-2">
      <button className="btn-ghost hidden h-9 w-9 p-0 sm:inline-flex" aria-label="Search"><Search size={18}/></button>
      <ThemeToggle dark={dark} setDark={setDark}/>
      <Button variant="secondary" className="hidden sm:inline-flex" onClick={onExport}><Download size={16}/>Export</Button>
      <div className="ml-1 flex items-center gap-2 border-l border-slate-200 pl-3 dark:border-slate-800"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white dark:bg-teal dark:text-slate-950">HM</div><div className="hidden xl:block"><div className="text-xs font-semibold">Hemangi Mehta</div><div className="text-[10px] text-slate-500">Project Admin</div></div></div>
    </div>
  </header>;
}

export function KpiCard({ title, value, sub, icon:Icon, tone="blue", trend }) {
  const tones={blue:"bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300", teal:"bg-teal/10 text-teal", amber:"bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300", red:"bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300"};
  return <div className="surface p-5"><div className="flex items-start justify-between"><div><div className="text-xs font-medium text-slate-500">{title}</div><div className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{value}</div></div><div className={cn("rounded-xl p-2.5",tones[tone])}><Icon size={19}/></div></div><div className="mt-3 flex items-center gap-2 text-xs"><span className={trend?.startsWith("-")?"text-red-600":"text-emerald-600"}>{trend}</span><span className="muted">{sub}</span></div></div>;
}

export function StatusBadge({ status }) {
  const tone = status==="On Track"||status==="Approved"||status==="Submitted"||status==="Auto-approved"||status==="Active"?"green":status==="At Risk"||status==="Needs Review"||status==="In Progress"||status==="Medium"?"amber":status==="Delayed"||status==="Critical"||status==="Unmatched"||status==="Inactive"?"red":"blue";
  return <Badge tone={tone}>{status}</Badge>;
}

export function ProgressBar({ value, className="" }) {
  return <div className={cn("h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",className)}><div className={cn("h-full rounded-full",value>=80?"bg-teal":value>=50?"bg-blue-500":"bg-amber-500")} style={{width:`${Math.max(0,Math.min(100,value))}%`}}/></div>;
}

export function EmptyState({ icon:Icon=FolderKanban, title, text, action }) {
  return <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 px-6 py-14 text-center dark:border-slate-700"><div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800"><Icon size={24} className="text-slate-500"/></div><h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3><p className="mt-1 max-w-md text-sm text-slate-500">{text}</p>{action&&<div className="mt-4">{action}</div>}</div>;
}

export function ChartCard({ title, subtitle, children, action }) {
  return <div className="surface p-5"><div className="mb-4 flex items-start justify-between"><div><h3 className="section-title">{title}</h3>{subtitle&&<p className="mt-1 text-xs muted">{subtitle}</p>}</div>{action}</div>{children}</div>;
}

export function MilestoneTimeline({ items }) {
  return <div className="space-y-5">{items.map((m,i)=><div key={m.name} className="flex gap-3"><div className="relative mt-1 flex w-4 justify-center"><div className={cn("h-3 w-3 rounded-full ring-4 ring-white dark:ring-slate-900",m.status==="At Risk"?"bg-amber-500":m.status==="On Track"?"bg-teal":"bg-slate-300")}/>{i<items.length-1&&<div className="absolute top-3 h-8 w-px bg-slate-200 dark:bg-slate-700"/>}</div><div className="flex-1"><div className="flex items-start justify-between gap-2"><div className="text-sm font-medium text-slate-800 dark:text-slate-200">{m.name}</div><StatusBadge status={m.status}/></div><div className="mt-1 text-xs muted">{m.date}</div></div></div>)}</div>;
}

export function UploadDropzone({ onFiles, accept=".xlsx,.xls,.csv,.mpp,.xer,.pdf,.jpg,.jpeg,.png", label="Drop files here or browse" }) {
  const [uploading,setUploading]=React.useState(false);
  const inputRef=React.useRef();
  function choose(e){ const files=[...(e.target.files||[])]; if(!files.length)return; setUploading(true); setTimeout(()=>{setUploading(false);onFiles?.(files);},900); }
  return <div onClick={()=>inputRef.current?.click()} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault(); const files=[...e.dataTransfer.files]; if(files.length){setUploading(true);setTimeout(()=>{setUploading(false);onFiles?.(files)},900)}}} className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center hover:border-teal hover:bg-teal/5 dark:border-slate-700 dark:bg-slate-950/50">
    <input ref={inputRef} type="file" multiple accept={accept} className="hidden" onChange={choose}/>
    {uploading?<><div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-teal border-t-transparent"/><p className="mt-3 text-sm font-semibold">Uploading…</p></>:<><UploadCloud className="mx-auto text-slate-400" size={30}/><p className="mt-3 text-sm font-semibold">{label}</p><p className="mt-1 text-xs muted">Primavera, MS Project, Excel, CSV, PDF or images</p></>}
  </div>;
}

export function AppShell({ children, dark, setDark, projectId, setProjectId }) {
  const [mobile,setMobile]=React.useState(false);
  const [collapsed,setCollapsed]=React.useState(false);
  const [toast,setToast]=React.useState(null);
  React.useEffect(()=>{ if(toast){const t=setTimeout(()=>setToast(null),2800);return()=>clearTimeout(t)}},[toast]);
  const exportReport=()=>{const blob=new Blob(["InfraPulse demo export\\nProject: "+projectId+"\\nGenerated: "+new Date().toISOString()],{type:"text/plain"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="infrapulse-report.txt";a.click();setToast({message:"Report export generated."})};
  return <div className="flex min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <Sidebar collapsed={collapsed}/>
    <MobileNav open={mobile} onClose={()=>setMobile(false)}/>
    <div className="flex min-w-0 flex-1 flex-col">
      <Topbar onMenu={()=>setMobile(true)} dark={dark} setDark={setDark} projectId={projectId} setProjectId={setProjectId} onExport={exportReport}/>
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  </div>;
}

export function PageHeader({ title, description, actions }) {
  return <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="page-title">{title}</h1>{description&&<p className="mt-1 max-w-3xl text-sm muted">{description}</p>}</div><div className="flex flex-wrap gap-2">{actions}</div></div>;
}

export function FilterBar({ children }) { return <div className="surface mb-5 flex flex-wrap items-center gap-2 p-3">{children}</div>; }
export { Button, Badge, Modal, Toast, Input, Textarea };
