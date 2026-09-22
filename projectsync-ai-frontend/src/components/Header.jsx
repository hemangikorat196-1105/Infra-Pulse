import { Bell, Menu, UserCircle, ChevronDown } from "lucide-react";

export default function Header({ onMenu }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button className="lg:hidden" onClick={onMenu}><Menu size={23}/></button>
        <div>
          <div className="text-[10px] text-slate-400">Project</div>
          <div className="flex items-center gap-1 text-sm font-semibold text-slate-700">
            Assam Gas Compression Project <ChevronDown size={15}/>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 hover:bg-slate-100">
          <Bell size={19}/>
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"/>
        </button>
        <div className="hidden items-center gap-2 sm:flex">
          <UserCircle size={28} className="text-slate-500"/>
          <div>
            <div className="text-xs font-semibold">Yatri Devbhog</div>
            <div className="text-[10px] text-slate-400">Project Engineer</div>
          </div>
        </div>
      </div>
    </header>
  );
}