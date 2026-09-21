import React from "react";
export default function PhotoGallery({ photos=[], onPreview }) {
  return <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{photos.map(p=><button key={p.id} onClick={()=>onPreview?.(p)} className="overflow-hidden rounded-xl border text-left"><img src={p.src} alt={p.title} className="aspect-[4/3] w-full object-cover"/><div className="p-2"><div className="truncate text-xs font-semibold">{p.title}</div><div className="text-[10px] text-slate-500">{p.date}</div></div></button>)}</div>;
}
