import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Logo, Button, Input, ThemeToggle } from "../components/common";

export default function Login(){
  const nav=useNavigate(); const [dark,setDark]=React.useState(document.documentElement.classList.contains("dark"));
  const [email,setEmail]=React.useState("demo@infrapulse.app"),[password,setPassword]=React.useState("demo1234"),[show,setShow]=React.useState(false),[error,setError]=React.useState("");
  React.useEffect(()=>{document.documentElement.classList.toggle("dark",dark)},[dark]);
  const submit=(e)=>{e.preventDefault();if(!email||!password){setError("Email and password are required.");return}nav("/dashboard")};
  return <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
    <div className="mx-auto flex min-h-screen max-w-7xl">
      <div className="hidden w-1/2 flex-col justify-between bg-navy p-10 text-white lg:flex">
        <Logo light/>
        <div className="max-w-xl"><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs"><ShieldCheck size={14} className="text-teal"/> Construction intelligence workspace</div><h1 className="text-5xl font-bold leading-tight">From schedule<br/>to <span className="text-teal">site reality.</span></h1><p className="mt-5 max-w-md text-sm leading-6 text-slate-300">Connect planning data, field reports, photos and AI-assisted activity matching in one operational workspace.</p><div className="mt-8 grid grid-cols-2 gap-3">{["AI activity extraction","Schedule impact analysis","Daily site intelligence","Project health analytics"].map(x=><div key={x} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm"><CheckCircle2 size={15} className="mb-2 text-teal"/>{x}</div>)}</div></div>
        <div className="text-xs text-slate-400">InfraPulse demo environment · No backend connected</div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-10">
        <div className="flex justify-end"><ThemeToggle dark={dark} setDark={setDark}/></div>
        <div className="mx-auto flex w-full max-w-md flex-1 items-center"><div className="w-full"><div className="mb-8 lg:hidden"><Logo/></div><div className="mb-8"><h1 className="text-3xl font-bold">Welcome back</h1><p className="mt-2 text-sm muted">Sign in to your InfraPulse workspace.</p></div>
          <form onSubmit={submit} className="space-y-5"><div><label className="mb-2 block text-sm font-medium">Work email</label><Input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@company.com"/></div><div><div className="mb-2 flex justify-between"><label className="text-sm font-medium">Password</label><button type="button" className="text-xs font-semibold text-teal-700">Forgot password?</button></div><div className="relative"><Input value={password} onChange={e=>setPassword(e.target.value)} type={show?"text":"password"} placeholder="••••••••" className="pr-10"/><button type="button" onClick={()=>setShow(!show)} className="absolute right-3 top-2.5 text-slate-400" aria-label="Show password">{show?<EyeOff size={17}/>:<Eye size={17}/>}</button></div></div><label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-teal"/>Remember me</label>{error&&<p className="text-sm text-red-600">{error}</p>}<Button className="w-full" type="submit">Sign in <ArrowRight size={16}/></Button><Button variant="secondary" type="button" className="w-full" onClick={()=>nav("/dashboard")}>Continue with demo workspace</Button></form>
          <p className="mt-8 text-center text-xs text-slate-400">By continuing, you agree to the demo terms and privacy notice.</p>
        </div></div>
      </div>
    </div>
  </div>
}
