import { Activity, CheckCircle2, Clock3, AlertTriangle, Upload, FileSpreadsheet, Mic, CalendarDays, ArrowUpRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { activities, progressData } from "../data";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6">
      <PageHeader
        title="Welcome, Yatri!"
        subtitle="Here's your project progress overview"
        actions={<span className="text-xs text-slate-400">Last updated: 16 Sep 2025</span>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Activity} label="Total Activities" value="248" change="5%" tone="blue"/>
        <StatCard icon={CheckCircle2} label="Completed" value="142" change="12%" tone="green"/>
        <StatCard icon={Clock3} label="In Progress" value="76" change="7%" tone="orange"/>
        <StatCard icon={AlertTriangle} label="Delayed" value="30" change="2%" tone="red"/>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        <div className="card p-5 xl:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <div><h2 className="font-bold">Progress Trend</h2><p className="text-xs text-slate-400">Planned vs actual</p></div>
            <div className="flex items-center gap-5">
              <div className="text-center"><div className="text-2xl font-bold text-emerald-600">66%</div><div className="text-[10px] text-slate-400">Overall Progress</div></div>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8edf3"/>
                <XAxis dataKey="week" fontSize={11}/>
                <YAxis fontSize={11}/>
                <Tooltip/>
                <Line type="monotone" dataKey="planned" name="Planned" stroke="#2f80ed" strokeWidth={2.5} dot={false}/>
                <Line type="monotone" dataKey="actual" name="Actual" stroke="#19a974" strokeWidth={2.5} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-bold">Quick Actions</h2>
          <div className="mt-4 space-y-2.5">
            {[
              [CalendarDays, "View Schedule", "/schedule"],
              [Upload, "Capture Activity", "/daily-reports"],
              [FileSpreadsheet, "Upload Report", "/daily-reports"],
              [Mic, "Voice Input", "/daily-reports"],
            ].map(([Icon, label, path]) => (
              <a key={label} href={path} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold hover:bg-slate-50">
                <Icon size={18} className="text-blue-600"/>{label}<ArrowUpRight size={15} className="ml-auto text-slate-400"/>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-5 overflow-hidden">
        <div className="flex items-center justify-between border-b p-5"><h2 className="font-bold">Recent Activities</h2><a href="/schedule" className="text-xs font-semibold text-blue-600">View All</a></div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-xs">
            <thead className="bg-slate-50 text-slate-500"><tr>{["Activity","Discipline","Planned Start","Actual Start","Status"].map(x=><th key={x} className="px-5 py-3 font-semibold">{x}</th>)}</tr></thead>
            <tbody>
              {activities.slice(0,5).map(a=>(
                <tr key={a.id} className="border-t hover:bg-slate-50">
                  <td className="px-5 py-3 font-semibold text-slate-700">{a.name}</td><td className="px-5 py-3 text-slate-500">{a.discipline}</td><td className="px-5 py-3">{a.plannedStart}</td><td className="px-5 py-3">{a.actualStart}</td><td className="px-5 py-3"><StatusBadge status={a.status}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}