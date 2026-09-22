import { BrainCircuit, CheckCircle2, AlertTriangle, HelpCircle, Search } from "lucide-react";
import { matches } from "../data";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import ProgressBar from "../components/ProgressBar";

export default function AIMatching() {
  return (
    <div className="p-4 md:p-6">
      <PageHeader title="AI Matching & Linking" subtitle="Match extracted site activities to the approved project schedule." actions={<button className="btn-primary flex items-center gap-2"><BrainCircuit size={17}/> Run Matching</button>}/>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Total Extracted","248","blue",Search],
          ["Matched","180","green",CheckCircle2],
          ["Unmatched","45","red",HelpCircle],
          ["Needs Review","23","orange",AlertTriangle],
        ].map(([a,b,t,Icon])=><div className="card p-5" key={a}><div className="flex justify-between"><div><div className="text-xs text-slate-500">{a}</div><div className="mt-1 text-2xl font-bold">{b}</div></div><Icon className={`text-${t}-500`} size={22}/></div></div>)}
      </div>

      <div className="card mt-5 overflow-hidden">
        <div className="border-b p-5"><h2 className="font-bold">Sample Matching Results</h2><p className="mt-1 text-xs text-slate-400">Similarity score is used to decide auto-match vs human review.</p></div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-xs">
            <thead className="bg-slate-50 text-slate-500"><tr>{["Extracted Description","Matched Activity","Activity ID","Confidence","Status","Action"].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead>
            <tbody>{matches.map(m=><tr key={m.id} className="border-t">
              <td className="px-5 py-4 font-medium">{m.extracted}</td><td className="px-5 py-4">{m.matched}</td><td className="px-5 py-4 font-semibold text-blue-600">{m.id}</td>
              <td className="w-44 px-5 py-4"><div className="mb-1 flex justify-between"><span>{m.score}%</span><span className="text-slate-400">similarity</span></div><ProgressBar value={m.score} color={m.score>=90?"bg-emerald-500":m.score>=60?"bg-amber-500":"bg-red-500"}/></td>
              <td className="px-5 py-4"><StatusBadge status={m.status}/></td><td className="px-5 py-4"><button className="text-xs font-semibold text-blue-600">Review</button></td>
            </tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}