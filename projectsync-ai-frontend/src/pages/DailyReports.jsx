import { useRef, useState } from "react";
import { UploadCloud, FileText, FileSpreadsheet, Mic, Camera, Sparkles, CheckCircle2 } from "lucide-react";
import { reportFiles } from "../data";
import PageHeader from "../components/PageHeader";

export default function DailyReports() {
  const [tab, setTab] = useState("Daily Report (PDF/Doc)");
  const [file, setFile] = useState(null);
  const input = useRef();

  return (
    <div className="p-4 md:p-6">
      <PageHeader title="Upload & Ingest Data" subtitle="Import daily reports, schedules and site evidence for processing."/>
      <div className="mb-4 flex flex-wrap gap-2">
        {["Daily Report (PDF/Doc)","Spreadsheet (Excel/CSV)","Site Diary (Image/PDF)"].map(x=><button key={x} onClick={()=>setTab(x)} className={`rounded-lg border px-4 py-2 text-xs font-semibold ${tab===x?"border-blue-200 bg-blue-50 text-blue-700":"bg-white text-slate-500"}`}>{x}</button>)}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="card p-5 xl:col-span-2">
          <div onClick={()=>input.current.click()} className="flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/30 text-center hover:bg-blue-50">
            <UploadCloud size={42} className="text-blue-500"/>
            <div className="mt-3 font-bold text-slate-700">Drag & drop files here or click to browse</div>
            <div className="mt-1 text-xs text-slate-400">PDF, DOCX, XLSX, CSV, JPG, PNG supported</div>
            {file && <div className="mt-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs shadow"><FileText size={16} className="text-blue-600"/>{file.name}<CheckCircle2 size={16} className="text-emerald-500"/></div>}
          </div>
          <input ref={input} type="file" className="hidden" onChange={e=>setFile(e.target.files?.[0])}/>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="btn-primary flex items-center gap-2"><Sparkles size={16}/> Process with AI</button>
            <button className="btn-secondary">Save to Knowledge Base</button>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-bold">Manual / Voice Input</h2>
          <textarea className="mt-4 h-28 w-full rounded-lg border p-3 text-sm outline-none focus:border-blue-500" placeholder="Type today's site update..."/>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="btn-secondary flex items-center justify-center gap-2 text-xs"><Mic size={16}/> Voice</button>
            <button className="btn-secondary flex items-center justify-center gap-2 text-xs"><Camera size={16}/> Photo</button>
          </div>
          <button className="btn-primary mt-3 w-full">Submit Activity</button>
        </div>
      </div>

      <div className="card mt-5 overflow-hidden">
        <div className="border-b p-5"><h2 className="font-bold">Recent Ingested Files</h2></div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-xs">
            <thead className="bg-slate-50 text-slate-500"><tr>{["File Name","Type","Uploaded By","Uploaded At","Status"].map(x=><th key={x} className="px-5 py-3">{x}</th>)}</tr></thead>
            <tbody>{reportFiles.map(f=><tr key={f.name} className="border-t"><td className="px-5 py-3 font-semibold">{f.name}</td><td className="px-5 py-3">{f.type}</td><td className="px-5 py-3">{f.uploaded}</td><td className="px-5 py-3">{f.date}</td><td className="px-5 py-3 text-emerald-600 font-semibold">{f.status}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}