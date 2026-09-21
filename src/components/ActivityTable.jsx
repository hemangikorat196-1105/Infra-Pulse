import React from "react";
import { StatusBadge, ProgressBar } from "./common";
export default function ActivityTable({ activities=[] }) {
  return <div className="space-y-3">{activities.map(a=><div key={a.id} className="rounded-xl border border-slate-200 p-3 dark:border-slate-800"><div className="flex flex-wrap items-center justify-between gap-2"><div><div className="text-sm font-semibold">{a.name}</div><div className="text-xs text-slate-500">{a.id} · {a.discipline}</div></div><StatusBadge status={a.status}/></div><div className="mt-3 flex items-center gap-2"><ProgressBar value={a.progress} className="flex-1"/><span className="text-xs">{a.progress}%</span></div></div>)}</div>;
}
