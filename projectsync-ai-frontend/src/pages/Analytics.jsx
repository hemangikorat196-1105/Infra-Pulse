import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { AlertTriangle, TrendingDown } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { progressData } from "../data";

const discipline = [
  { name: "Civil", planned: 74, actual: 69 },
  { name: "Mechanical", planned: 81, actual: 73 },
  { name: "Electrical", planned: 62, actual: 58 },
  { name: "Instrumentation", planned: 56, actual: 49 },
  { name: "HSE", planned: 92, actual: 88 },
];

export default function Analytics() {
  return (
    <div className="p-4 md:p-6">
      <PageHeader title="Progress Analytics" subtitle="Project health, schedule variance and discipline-wise performance."/>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card p-5"><div className="text-xs text-slate-500">Overall Progress</div><div className="mt-1 text-3xl font-bold text-emerald-600">68%</div></div>
        <div className="card p-5"><div className="text-xs text-slate-500">Planned</div><div className="mt-1 text-3xl font-bold">72%</div></div>
        <div className="card p-5"><div className="text-xs text-slate-500">Actual</div><div className="mt-1 text-3xl font-bold">68%</div></div>
        <div className="card p-5"><div className="text-xs text-slate-500">Schedule Variance</div><div className="mt-1 text-3xl font-bold text-red-600">-4%</div></div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <div className="card p-5"><h2 className="font-bold">Progress Trend</h2><div className="mt-4 h-72"><ResponsiveContainer><LineChart data={progressData}><CartesianGrid strokeDasharray="3 3" stroke="#e8edf3"/><XAxis dataKey="week" fontSize={11}/><YAxis fontSize={11}/><Tooltip/><Legend/><Line dataKey="planned" stroke="#2f80ed" strokeWidth={2.5}/><Line dataKey="actual" stroke="#19a974" strokeWidth={2.5}/></LineChart></ResponsiveContainer></div></div>
        <div className="card p-5"><h2 className="font-bold">Progress by Discipline</h2><div className="mt-4 h-72"><ResponsiveContainer><BarChart data={discipline} layout="vertical"><CartesianGrid strokeDasharray="3 3" stroke="#e8edf3"/><XAxis type="number" domain={[0,100]}/><YAxis dataKey="name" type="category" width={90} fontSize={10}/><Tooltip/><Legend/><Bar dataKey="planned" fill="#2f80ed" radius={[0,4,4,0]}/><Bar dataKey="actual" fill="#19a974" radius={[0,4,4,0]}/></BarChart></ResponsiveContainer></div></div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="card p-5"><div className="flex items-center gap-3"><AlertTriangle className="text-red-500"/><div><h2 className="font-bold">Delay Trend</h2><p className="text-xs text-slate-400">30 activities currently delayed</p></div></div><div className="mt-5 rounded-lg bg-red-50 p-4 text-sm text-red-700">Schedule variance is <b>-4%</b>. Review critical activities before the next reporting cycle.</div></div>
        <div className="card p-5"><div className="flex items-center gap-3"><TrendingDown className="text-amber-500"/><div><h2 className="font-bold">Top Delay Causes</h2><p className="text-xs text-slate-400">Based on recent reports</p></div></div><div className="mt-5 space-y-3 text-xs">{[["Material Delay",31],["Weather",18],["Resource Shortage",16],["Design Change",12]].map(([x,v])=><div key={x}><div className="mb-1 flex justify-between"><span>{x}</span><b>{v}%</b></div><div className="h-2 rounded bg-slate-100"><div className="h-2 rounded bg-orange-400" style={{width:`${v}%`}}/></div></div>)}</div></div>
      </div>
    </div>
  );
}