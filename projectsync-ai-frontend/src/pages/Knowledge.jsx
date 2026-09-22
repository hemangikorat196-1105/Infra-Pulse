import { BookOpen, Search, Download, FileText, FileSpreadsheet } from "lucide-react";
import { knowledge } from "../data";
import PageHeader from "../components/PageHeader";

export default function Knowledge() {
  return (
    <div className="p-4 md:p-6">
      <PageHeader title="Knowledge Base" subtitle="Project documents, guides, templates and reusable project knowledge."/>
      <div className="card mb-5 flex items-center gap-2 p-3"><Search size={18} className="text-slate-400"/><input className="w-full outline-none text-sm" placeholder="Search documents, guides or FAQs..."/></div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{knowledge.map((k,i)=>{const Icon=k.type==="Excel"?FileSpreadsheet:FileText; return <div className="card p-5" key={i}><div className="flex items-start justify-between"><div className="rounded-lg bg-blue-50 p-3 text-blue-600"><Icon size={22}/></div><button className="text-blue-600"><Download size={17}/></button></div><h2 className="mt-4 font-bold">{k.title}</h2><div className="mt-1 text-xs text-slate-400">{k.type} • {k.size} • {k.date}</div><button className="mt-4 text-xs font-semibold text-blue-600">Open document</button></div>})}</div>
      <div className="card mt-5 p-5"><div className="flex items-center gap-3"><BookOpen className="text-blue-600"/><div><div className="font-bold">Institutional Memory</div><div className="text-xs text-slate-400">Future AI can learn terminology and patterns from approved historical projects.</div></div></div></div>
    </div>
  );
}