import React from "react";
import { Check, X } from "lucide-react";
import { Button, Badge } from "./common";
export default function ReviewQueueItem({ item, onApprove, onReject }) {
  const tone=item.confidence>90?"green":item.confidence>=60?"amber":"red";
  return <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"><div className="flex justify-between gap-3"><div><div className="text-sm font-semibold">{item.activity}</div><div className="mt-1 text-xs text-slate-500">{item.report} · similarity {item.similarity}%</div></div><Badge tone={tone}>{item.confidence}% confidence</Badge></div><p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.extracted}</p><div className="mt-3 flex gap-2"><Button className="h-9" onClick={()=>onApprove?.(item)}><Check size={15}/>Approve</Button><Button variant="danger" className="h-9" onClick={()=>onReject?.(item)}><X size={15}/>Reject</Button></div></div>;
}
