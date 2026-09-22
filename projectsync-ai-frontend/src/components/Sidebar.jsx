import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, CalendarDays, FileText, BrainCircuit, BarChart3,
  Bell, BookOpen, Settings, X
} from "lucide-react";

const items = [
  ["Dashboard", "/", LayoutDashboard],
  ["Schedule", "/schedule", CalendarDays],
  ["Daily Reports", "/daily-reports", FileText],
  ["AI Matching", "/ai-matching", BrainCircuit],
  ["Analytics", "/analytics", BarChart3],
  ["Alerts", "/alerts", Bell],
  ["Reports", "/reports", FileText],
  ["Knowledge Base", "/knowledge", BookOpen],
  ["Settings", "/settings", Settings],
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed left-0 top-0 z-50 h-screen w-64 bg-[#061a31] text-white transition-transform lg:static lg:z-auto lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <div>
            <div className="text-lg font-bold tracking-tight">ProjectSync AI</div>
            <div className="text-[10px] text-slate-400">From Site to Schedule</div>
          </div>
          <button className="lg:hidden" onClick={onClose}><X size={20}/></button>
        </div>

        <nav className="p-3">
          {items.map(([label, path, Icon]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `mb-1 flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition ${
                  isActive ? "bg-[#1677e8] text-white shadow-sm" : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full border-t border-white/10 p-4 text-[10px] text-slate-500">
          Infrastructure Progress System
        </div>
      </aside>
    </>
  );
}