import React from "react";
import { Bell, CheckCheck, AlertTriangle, ChevronRight } from "lucide-react";
import { alerts as seed } from "../data/mockData";
import { PageHeader, Button, StatusBadge, Modal, Badge } from "../components/common";

export default function Alerts(){
 const [rows,setRows]=React.useState(seed),[selected,setSelected]=React.useState(null),[filter,setFilter]=React.useState("All");
 const mark=(id)=>setRows(rows.map(a=>a.id===id?{...a,read:true}:a)); const markAll=()=>setRows(rows.map(a=>({...a,read:true})));
 const filtered=rows.filter(a=>filter==="All"||(filter==="Unread"&&!a.read)||a.severity===filter);
 return <div><PageHeader title="Alerts" description="Schedule risks, AI review signals, missing reports and milestone warnings." actions={<Button variant="secondary" onClick={markAll}><CheckCheck size={16}/>Mark all as read</Button>}/>
 <div className="mb-5 flex flex-wrap gap-2">{["All","Unread","Critical","High","Medium"].map(x=><button key={x} onClick={()=>setFilter(x)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${filter===x?"bg-navy text-white dark:bg-teal dark:text-slate-950":"bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>{x}</button>)}</div>
 <div className="space-y-3">{filtered.map(a=><button key={a.id} onClick={()=>{setSelected(a);mark(a.id)}} className={`surface flex w-full items-start gap-4 p-4 text-left transition hover:shadow-md ${!a.read?"border-l-4 border-l-red-500":""}`}><div className="rounded-xl bg-red-50 p-2.5 text-red-600 dark:bg-red-500/10"><AlertTriangle size={18}/></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-bold">{a.title}</h3><Badge tone={a.severity==="Critical"?"red":a.severity==="High"?"amber":"blue"}>{a.severity}</Badge>{!a.read&&<Badge tone="teal">Unread</Badge>}</div><p className="mt-1 text-sm muted">{a.detail}</p><div className="mt-2 text-xs muted">{a.type} · {a.time}</div></div><ChevronRight className="mt-1 shrink-0 text-slate-400" size={18}/></button>)}</div>
 <Modal open={!!selected} onClose={()=>setSelected(null)} title="Alert detail">{selected&&<div><div className="flex items-center gap-2"><StatusBadge status={selected.severity}/><span className="text-xs muted">{selected.type}</span></div><h2 className="mt-3 text-xl font-bold">{selected.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{selected.detail}</p><div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-800"><strong>Recommended workflow</strong><p className="mt-1 text-xs muted">Open the related schedule activity, review the latest site evidence, then update the forecast or assign an owner.</p></div><div className="mt-5 flex justify-end"><Button onClick={()=>setSelected(null)}>Close</Button></div></div>}</Modal>
 </div>
}
