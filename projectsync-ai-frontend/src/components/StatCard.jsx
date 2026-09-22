export default function StatCard({ icon: Icon, label, value, change, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
  };
  return (
    <div className="card p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-slate-500">{label}</div>
          <div className="mt-1 text-2xl font-bold text-slate-800">{value}</div>
          <div className="mt-1 text-[11px] text-emerald-600">↑ {change}</div>
        </div>
        <div className={`rounded-lg p-2.5 ${tones[tone]}`}><Icon size={20}/></div>
      </div>
    </div>
  );
}