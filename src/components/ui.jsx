import React from "react";
import { X, Check, AlertTriangle, Info, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export function Button({ className, variant="primary", loading=false, children, ...props }) {
  const styles = { primary:"btn-primary", secondary:"btn-secondary", ghost:"btn-ghost", danger:"btn bg-red-600 text-white hover:bg-red-700", teal:"btn bg-teal text-slate-950 hover:bg-teal/90" };
  return <button className={cn(styles[variant], className)} disabled={loading || props.disabled} {...props}>
    {loading && <Loader2 size={16} className="animate-spin" />}{children}
  </button>;
}

export function Input({ className, ...props }) { return <input className={cn("input", className)} {...props} />; }
export function Textarea({ className, ...props }) { return <textarea className={cn("min-h-24 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white", className)} {...props} />; }

export function Badge({ children, tone="slate" }) {
  const map = {
    slate:"bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    green:"bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    amber:"bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    red:"bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
    blue:"bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    teal:"bg-teal/10 text-teal-700 dark:text-teal-300"
  };
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", map[tone] || map.slate)}>{children}</span>;
}

export function Modal({ open, onClose, title, children, size="md" }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4" role="dialog" aria-modal="true" onMouseDown={(e)=>e.target===e.currentTarget&&onClose()}>
    <div className={cn("max-h-[90vh] w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900", size==="lg"?"max-w-3xl":"max-w-xl")}>
      <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
        <h2 className="font-semibold text-slate-950 dark:text-white">{title}</h2>
        <button className="btn-ghost h-8 w-8 rounded-lg p-0" onClick={onClose} aria-label="Close dialog"><X size={18}/></button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  </div>;
}

export function Toast({ toast, onClose }) {
  if (!toast) return null;
  const Icon = toast.type==="error" ? AlertTriangle : toast.type==="info" ? Info : Check;
  return <div className="fixed bottom-5 right-5 z-[60] flex w-[min(380px,calc(100vw-32px))] items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900" role="status">
    <Icon size={18} className={toast.type==="error"?"text-red-500":"text-teal"} />
    <div className="flex-1 text-sm text-slate-700 dark:text-slate-200">{toast.message}</div>
    <button onClick={onClose} aria-label="Dismiss notification"><X size={16}/></button>
  </div>;
}
