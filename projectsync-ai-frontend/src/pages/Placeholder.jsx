import PageHeader from "../components/PageHeader";
export default function Placeholder({ title, subtitle }) {
  return <div className="p-4 md:p-6"><PageHeader title={title} subtitle={subtitle}/><div className="card flex min-h-[420px] items-center justify-center p-8 text-center"><div><div className="text-lg font-bold text-slate-700">Module ready for backend integration</div><p className="mt-2 max-w-lg text-sm text-slate-400">The frontend route is prepared. Connect this screen to FastAPI, PostgreSQL and the selected AI service in the next phase.</p></div></div></div>;
}