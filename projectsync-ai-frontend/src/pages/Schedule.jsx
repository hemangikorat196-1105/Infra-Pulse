import { useMemo, useState } from "react";
import { Search, Filter, ChevronRight, ChevronDown, Plus } from "lucide-react";
import { activities } from "../data";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";

export default function Schedule() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All Status");
  const [open, setOpen] = useState(true);

  const filtered = useMemo(() => activities.filter(a =>
    (a.name.toLowerCase().includes(query.toLowerCase()) || a.id.toLowerCase().includes(query.toLowerCase())) &&
    (status === "All Status" || a.status === status)
  ), [query,status]);

  return (
    <div className="p-4 md:p-6">
      <PageHeader title="Project Schedule" subtitle="Planning baseline and actual execution tracking"
        actions={<button className="btn-primary flex items-center gap-2"><Plus size={17}/> Add Activity</button>}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {["L1 (Phase)","L2 (Major)","L3 (System)","L4 (Package)","L5/L6 (Activity)"].map((x,i)=><button key={x} className={`rounded-lg border px-4 py-2 text-xs font-semibold ${i===4?"border-blue-200 bg-blue-50 text-blue-700":"bg-white text-slate-500"}`}>{x}</button>)}
      </div>

      <div className="card overflow-hidden">
        <div className="flex flex-wrap gap-2 border-b bg-slate-50/70 p-3">
          <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-lg border bg-white px-3"><Search size={16} className="text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} className="w-full py-2 text-xs outline-none" placeholder="Search activity, ID or description..."/></div>
          <select className="rounded-lg border bg-white px-3 text-xs" defaultValue="All Disciplines"><option>All Disciplines</option><option>Mechanical</option><option>Civil</option><option>Electrical</option></select>
          <select value={status} onChange={e=>setStatus(e.target.value)} className="rounded-lg border bg-white px-3 text-xs"><option>All Status</option><option>Completed</option><option>In Progress</option><option>Delayed</option><option>Not Started</option></select>
          <button className="btn-secondary flex items-center gap-2 text-xs"><Filter size={15}/> More Filters</button>
        </div>

        <div className="flex min-h-[560px]">
          <div className="hidden w-72 border-r bg-slate-50/40 p-4 md:block">
            <div className="mb-3 text-xs font-bold text-slate-500">PROJECT HIERARCHY</div>
            <div className="text-sm font-semibold text-slate-700" onClick={()=>setOpen(!open)}>
              {open?<ChevronDown size={15} className="mr-1 inline"/>:<ChevronRight size={15} className="mr-1 inline"/>} 1. Site Preparation
            </div>
            {open && <div className="mt-3 space-y-3 pl-5 text-xs text-slate-600">
              <div>2. Civil Works <span className="float-right text-slate-400">24</span></div>
              <div>3. Mechanical Works <span className="float-right text-slate-400">48</span></div>
              <div className="rounded bg-blue-50 p-2 font-semibold text-blue-700">3.1 Piping System <span className="float-right">20</span></div>
              <div className="pl-3">3.1.1 Pipe Laying</div>
              <div className="pl-3">3.1.2 Spool Fabrication</div>
              <div>3.2 Static Equipment</div>
              <div>3.3 Rotating Equipment</div>
              <div>4. Electrical Works</div>
              <div>5. Instrumentation & Control</div>
              <div>6. HSE & Commissioning</div>
            </div>}
          </div>

          <div className="min-w-0 flex-1 overflow-x-auto">
            <table className="w-full min-w-[950px] text-left text-xs">
              <thead className="bg-white text-slate-500"><tr>{["ID","Activity Name","Planned Start","Planned End","Actual Start","Status"].map(x=><th key={x} className="border-b px-4 py-3">{x}</th>)}</tr></thead>
              <tbody>
                {filtered.map(a=><tr key={a.id} className="border-b hover:bg-slate-50">
                  <td className="px-4 py-4 font-semibold text-blue-700">{a.id}</td>
                  <td className="px-4 py-4 font-semibold text-slate-700">{a.name}</td>
                  <td className="px-4 py-4">{a.plannedStart}</td><td className="px-4 py-4">{a.plannedEnd}</td><td className="px-4 py-4">{a.actualStart}</td><td className="px-4 py-4"><StatusBadge status={a.status}/></td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}