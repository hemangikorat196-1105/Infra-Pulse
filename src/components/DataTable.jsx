import React from "react";
export default function DataTable({ columns=[], rows=[], rowKey=(r)=>r.id, empty="No records found." }) {
  if (!rows.length) return <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500 dark:border-slate-700">{empty}</div>;
  return <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
    <div className="hidden overflow-x-auto md:block"><table className="w-full text-left text-sm"><thead className="bg-slate-50 dark:bg-slate-800/60"><tr>{columns.map(c=><th key={c.key} className="px-4 py-3 text-xs font-semibold text-slate-500">{c.label}</th>)}</tr></thead>
    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">{rows.map(row=><tr key={rowKey(row)}>{columns.map(c=><td key={c.key} className="px-4 py-3">{c.render?c.render(row):row[c.key]}</td>)}</tr>)}</tbody></table></div>
    <div className="divide-y divide-slate-100 md:hidden dark:divide-slate-800">{rows.map(row=><div key={rowKey(row)} className="p-4">{columns.map(c=><div key={c.key} className="mb-2 flex justify-between gap-4 text-sm"><span className="text-xs text-slate-500">{c.label}</span><span className="text-right">{c.render?c.render(row):row[c.key]}</span></div>)}</div>)}</div>
  </div>;
}
