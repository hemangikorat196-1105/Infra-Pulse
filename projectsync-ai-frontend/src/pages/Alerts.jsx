import { Bell, AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import { alerts } from "../data";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";

const icon = { Critical: AlertTriangle, Warning: AlertTriangle, Review: Bell, Info };

export default function Alerts() {
  return (
    <div className="p-4 md:p-6">
      <PageHeader title="Alerts & Notifications" subtitle="Review schedule risks, matching exceptions and site warnings."/>
      <div className="mb-4 flex gap-2"><button className="btn-secondary text-xs">All (12)</button><button className="btn-secondary text-xs">Critical (4)</button><button className="btn-secondary text-xs">Warnings (5)</button><button className="btn-secondary text-xs">Info (3)</button></div>
      <div className="space-y-3">{alerts.map((a,i)=>{const Icon=icon[a.severity]||Bell; return <div key={i} className="card flex items-start gap-4 p-5"><div className="rounded-full bg-slate-100 p-2"><Icon size={20}/></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-bold text-slate-700">{a.title}</h2><StatusBadge status={a.severity}/></div><p className="mt-1 text-sm text-slate-500">{a.text}</p><p className="mt-2 text-[11px] text-slate-400">{a.time}</p></div><button className="text-xs font-semibold text-blue-600">Review</button></div>})}</div>
      <div className="card mt-5 flex items-center gap-3 p-5"><CheckCircle2 className="text-emerald-500"/><div><div className="font-semibold">Notification preferences</div><div className="text-xs text-slate-400">Email and dashboard alerts are enabled.</div></div></div>
    </div>
  );
}