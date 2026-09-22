export default function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
    Delayed: "bg-red-50 text-red-700 border-red-200",
    "Not Started": "bg-slate-100 text-slate-600 border-slate-200",
    Matched: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Needs Review": "bg-amber-50 text-amber-700 border-amber-200",
    Unmatched: "bg-red-50 text-red-700 border-red-200",
    Critical: "bg-red-50 text-red-700 border-red-200",
    Warning: "bg-amber-50 text-amber-700 border-amber-200",
    Review: "bg-purple-50 text-purple-700 border-purple-200",
    Info: "bg-blue-50 text-blue-700 border-blue-200",
  };
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles[status] || styles.Info}`}>{status}</span>;
}