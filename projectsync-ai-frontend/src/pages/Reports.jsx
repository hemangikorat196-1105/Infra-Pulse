import { FileText, Download, BarChart3, CalendarDays } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { progressData } from "../data";

const reportTypes = [
  ["Overall Project Progress","PDF",FileText],
  ["Discipline Wise Progress","PDF",BarChart3],
  ["Delay Analysis","PDF",CalendarDays],
  ["Activity Summary","Excel",FileText],
  ["Resource Utilization","PDF",BarChart3],
];

export default function Reports() {
  return (
    <div className="p-4 md:p-6">
      <PageHeader title="Reports" subtitle="Generate project reports for management and site teams." actions={<button className="btn-primary">Generate Report</button>}/>
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2">
          <h2 className="font-bold">Available Reports</h2>
          <div className="mt-4 space-y-2">{reportTypes.map(([name,type,Icon])=><div key={name} className="flex items-center gap-3 rounded-lg border p-4"><Icon className="text-blue-600" size={20}/><div className="flex-1"><div className="text-sm font-semibold">{name}</div><div className="text-[11px] text-slate-400">Latest project data</div></div><span className="rounded bg-slate-100 px-2 py-1 text-[10px]">{type}</span><button className="btn-secondary flex items-center gap-1 text-xs"><Download size={14}/> Download</button></div>)}</div>
        </div>
        <div className="card p-5"><h2 className="font-bold">Overall Project Progress</h2><div className="mx-auto mt-7 flex h-36 w-36 items-center justify-center rounded-full border-[14px] border-emerald-500"><div className="text-center"><div className="text-3xl font-bold">68%</div><div className="text-[10px] text-slate-400">Complete</div></div></div><button className="btn-primary mt-7 w-full">Download Project PDF</button></div>
      </div>
      <div className="card mt-5 p-5"><h2 className="font-bold">Report Period</h2><div className="mt-3 flex flex-wrap gap-3"><input type="date" className="rounded-lg border px-3 py-2 text-sm" defaultValue="2025-09-01"/><span className="self-center text-slate-400">to</span><input type="date" className="rounded-lg border px-3 py-2 text-sm" defaultValue="2025-09-16"/></div></div>
    </div>
  );
}