import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Users, AlertTriangle, FileText, CalendarCheck2 } from "lucide-react";
import { projects, activities, reports, milestones } from "../data/mockData";
import { PageHeader, StatusBadge, ProgressBar, ChartCard, MilestoneTimeline, Button } from "../components/common";

export default function ProjectWorkspace(){
 const {projectId}=useParams(); const p=projects.find(x=>x.id===projectId)||projects[0];
 const tabs=[["Overview",""],["Schedule","/schedule"],["Reports","/daily-reports"],["Documents","/photos-documents"],["Analytics","/analytics"]];
 const acts=activities.filter(a=>a.project===p.id), reps=reports.filter(r=>r.project===p.id);
 return <div><Link to="/projects" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700"><ArrowLeft size={16}/>Back to projects</Link>
 <PageHeader title={p.name} description={`${p.client} · ${p.location}`} actions={<StatusBadge status={p.status}/>} />
 <div className="mb-5 flex gap-1 overflow-x-auto border-b border-slate-200 dark:border-slate-800">{tabs.map(([t,path])=>path?<Link key={t} to={path} className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-slate-500 hover:text-teal-700">{t}</Link>:<button key={t} className="border-b-2 border-teal px-4 py-3 text-sm font-semibold text-teal-700">{t}</button>)}</div>
 <div className="grid gap-5 lg:grid-cols-3"><div className="surface p-5 lg:col-span-2"><div className="flex items-center justify-between"><div><h3 className="section-title">Progress overview</h3><p className="mt-1 text-xs muted">Current delivery against approved plan</p></div><div className="text-2xl font-bold">{p.progress}%</div></div><ProgressBar value={p.progress} className="mt-4 h-3"/><div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4"><Metric label="Schedule health" value={`${p.health}/100`} icon={CalendarCheck2}/><Metric label="Variance" value={`+${p.delay}d`} icon={AlertTriangle}/><Metric label="Team" value="24" icon={Users}/><Metric label="Open issues" value="7" icon={FileText}/></div></div><ChartCard title="Milestone timeline"><MilestoneTimeline items={milestones.slice(0,4)}/></ChartCard></div>
 <div className="mt-5 grid gap-5 xl:grid-cols-2"><div className="surface p-5"><h3 className="section-title">Schedule status</h3><div className="mt-4 space-y-3">{acts.slice(0,5).map(a=><div key={a.id}><div className="flex justify-between text-sm"><span className="font-medium">{a.name}</span><StatusBadge status={a.status}/></div><div className="mt-1 flex items-center gap-2"><ProgressBar value={a.progress} className="flex-1"/><span className="text-xs muted">{a.progress}%</span></div></div>)}</div></div><div className="surface p-5"><h3 className="section-title">Recent site reports</h3><div className="mt-3 divide-y divide-slate-100 dark:divide-slate-800">{reps.map(r=><div key={r.id} className="py-3"><div className="flex justify-between"><span className="text-sm font-semibold">{r.id}</span><StatusBadge status={r.status}/></div><p className="mt-1 line-clamp-2 text-xs muted">{r.work}</p></div>)}</div></div></div>
 </div>
}
function Metric({label,value,icon:Icon}){return <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><Icon size={16} className="text-teal"/><div className="mt-2 text-lg font-bold">{value}</div><div className="text-[11px] muted">{label}</div></div>}
