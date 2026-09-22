import React from "react";
import { StatusBadge } from "./common";
export default function ReportCard({ report }) {
  return <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"><div className="flex justify-between gap-3"><h3 className="text-sm font-semibold">{report.id}</h3><StatusBadge status={report.status}/></div><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{report.work}</p><div className="mt-2 text-xs text-slate-500">{report.date} · {report.workforce} workers · {report.weather}</div></article>;
}
