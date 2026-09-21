import React from "react";
import { Link } from "react-router-dom";
import { Activity, AlertTriangle, CalendarCheck2, Clock3, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from "recharts";
import { PageHeader, KpiCard, ChartCard, ProgressBar, StatusBadge, MilestoneTimeline, Button } from "../components/common";
import { projects, activities, reports, progressData, sCurveData, milestones } from "../data/mockData";

export default function Dashboard({projectId}){
  const project=projects.find(p=>p.id===projectId)||projects[0];
  const projectActivities=activities.filter(a=>a.project===project.id);
  const projectReports=reports.filter(r=>r.project===project.id);
  return <div><PageHeader title="Project overview" description={`${project.name} · ${project.location}`} actions={<Button><Download size={16}/>Export report</Button>}/>
    <div className="mb-5 flex gap-2 overflow-x-auto lg:hidden"><select className="input max-w-sm"><option>{project.name}</option></select></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <KpiCard title="Overall progress" value={`${project.progress}%`} sub="vs 64% planned" trend="+2.4% this week" icon={Activity} tone="teal"/>
      <KpiCard title="Schedule health" value={`${project.health}/100`} sub="Healthy delivery signal" trend="+4 pts" icon={CalendarCheck2} tone="blue"/>
      <KpiCard title="Schedule variance" value={project.delay?`+${project.delay}d`:"0d"} sub="Against baseline" trend={project.delay?"+3d":"0d"} icon={Clock3} tone={project.delay?"amber":"teal"}/>
      <KpiCard title="Open alerts" value="4" sub="1 critical · 2 high" trend="-2 resolved" icon={AlertTriangle} tone="red"/>
    </div>
    <div className="mt-5 grid gap-5 xl:grid-cols-3"><div className="xl:col-span-2"><ChartCard title="Planned vs actual progress" subtitle="Weekly cumulative progress"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={progressData}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="week" tick={{fontSize:11}}/><YAxis tick={{fontSize:11}} unit="%"/><Tooltip/><Line type="monotone" dataKey="planned" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5"/><Line type="monotone" dataKey="actual" stroke="#1bb8b0" strokeWidth={3}/></LineChart></ResponsiveContainer></div></ChartCard></div>
      <ChartCard title="Upcoming milestones" subtitle="Next key dates"><MilestoneTimeline items={milestones}/></ChartCard>
    </div>
    <div className="mt-5 grid gap-5 xl:grid-cols-3"><div className="xl:col-span-2"><ChartCard title="S-curve" subtitle="Baseline vs current forecast"><div className="h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={sCurveData}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month"/><YAxis unit="%"/><Tooltip/><Area type="monotone" dataKey="planned" stroke="#64748b" fill="#94a3b8" fillOpacity={0.08}/><Area type="monotone" dataKey="actual" stroke="#1bb8b0" fill="#1bb8b0" fillOpacity={0.10}/></AreaChart></ResponsiveContainer></div></ChartCard></div>
      <div className="surface border-teal/20 bg-teal/5 p-5 dark:bg-teal/10"><div className="flex items-center gap-2 text-teal"><Sparkles size={18}/><span className="text-sm font-bold">AI project insight</span></div><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">Culvert C-14 is the strongest schedule-risk signal. The activity is 8 days behind baseline and may move the drainage milestone if the next concrete pour slips.</p><Link to="/ai-review" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">Review AI matches <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="mt-5 grid gap-5 xl:grid-cols-2"><div className="surface p-5"><div className="mb-4 flex items-center justify-between"><div><h3 className="section-title">Critical-path activities</h3><p className="mt-1 text-xs muted">Activities with schedule impact potential</p></div><Link to="/schedule" className="text-xs font-semibold text-teal-700">View schedule</Link></div><div className="space-y-4">{projectActivities.filter(a=>a.variance>=3).map(a=><div key={a.id}><div className="flex justify-between gap-3"><div><div className="text-sm font-semibold">{a.name}</div><div className="mt-1 text-xs muted">{a.id} · {a.discipline} · +{a.variance} days</div></div><StatusBadge status={a.status}/></div><ProgressBar value={a.progress} className="mt-2"/></div>)}</div></div>
      <div className="surface p-5"><div className="mb-4 flex items-center justify-between"><div><h3 className="section-title">Recent daily reports</h3><p className="mt-1 text-xs muted">Latest field submissions</p></div><Link to="/daily-reports" className="text-xs font-semibold text-teal-700">View all</Link></div><div className="space-y-2">{projectReports.map(r=><Link to="/daily-reports" key={r.id} className="block rounded-xl border border-slate-100 p-3 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"><div className="flex justify-between"><span className="text-sm font-semibold">{r.id}</span><StatusBadge status={r.status}/></div><p className="mt-1 line-clamp-1 text-xs muted">{r.work}</p><div className="mt-2 text-[11px] muted">{r.date} · {r.submittedBy}</div></Link>)}</div></div></div>
  </div>
}
