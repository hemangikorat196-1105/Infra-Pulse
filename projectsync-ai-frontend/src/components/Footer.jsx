import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="flex items-center gap-2">
        <ShieldCheck size={15} className="text-blue-600" />
        <span>ProjectSync AI</span>
        <span className="text-slate-300">•</span>
        <span>Infrastructure Progress System</span>
      </div>

      <div>
        © 2026 ProjectSync AI · All rights reserved
      </div>
    </footer>
  );
}