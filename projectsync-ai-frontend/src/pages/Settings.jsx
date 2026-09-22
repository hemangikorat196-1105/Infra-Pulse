import { Bell, Mail, User, Database, Save } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Settings() {
  return (
    <div className="p-4 md:p-6">
      <PageHeader title="Settings" subtitle="Project preferences, notifications and integrations."/>
      <div className="grid gap-5 xl:grid-cols-2">
        <div className="card p-5"><div className="mb-5 flex items-center gap-3"><User className="text-blue-600"/><h2 className="font-bold">Project Settings</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[["Project Name","Assam Gas Compression Project"],["Start Date","01 Jan 2025"],["End Date","30 Jun 2027"],["Default View","Dashboard"]].map(([l,v])=><label key={l} className="text-xs font-semibold text-slate-600">{l}<input defaultValue={v} className="mt-1 w-full rounded-lg border px-3 py-2 text-sm font-normal outline-none focus:border-blue-500"/></label>)}
          </div>
          <button className="btn-primary mt-5 flex items-center gap-2"><Save size={16}/> Save Changes</button>
        </div>
        <div className="card p-5"><div className="mb-5 flex items-center gap-3"><Bell className="text-blue-600"/><h2 className="font-bold">Notifications</h2></div>
          {["Delay alerts","Daily progress digest","AI matching review alerts","Email alerts"].map(x=><label key={x} className="mb-4 flex items-center justify-between text-sm"><span>{x}</span><input type="checkbox" defaultChecked className="h-4 w-4"/></label>)}
        </div>
        <div className="card p-5"><div className="mb-5 flex items-center gap-3"><Database className="text-blue-600"/><h2 className="font-bold">Integrations</h2></div>
          {["PostgreSQL / pgvector","Gemini / OpenAI API","Whisper Speech-to-Text","Email Service"].map(x=><div key={x} className="mb-3 flex items-center justify-between rounded-lg border p-3 text-sm"><span>{x}</span><span className="text-emerald-600 text-xs font-semibold">Connected</span></div>)}
        </div>
        <div className="card p-5"><div className="mb-5 flex items-center gap-3"><Mail className="text-blue-600"/><h2 className="font-bold">User Preferences</h2></div>
          <label className="text-xs font-semibold">Display View<select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm font-normal"><option>Dashboard</option><option>Schedule</option><option>Analytics</option></select></label>
        </div>
      </div>
    </div>
  );
}