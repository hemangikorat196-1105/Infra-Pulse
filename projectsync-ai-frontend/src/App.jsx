import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import DailyReports from "./pages/DailyReports";
import AIMatching from "./pages/AIMatching";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Knowledge from "./pages/Knowledge";
import Settings from "./pages/Settings";
import Placeholder from "./pages/Placeholder";

<div className="app-layout">
  <div className="app-body">
    <Sidebar />

    <div className="min-w-0 flex-1 min-h-screen flex flex-col">
      <Header />

      <main className="main-content flex-1">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/daily-reports" element={<DailyReports/>}/>
          <Route path="/ai-matching" element={<AIMatching/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/alerts" element={<Alerts/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/knowledge" element={<Knowledge/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/activity-capture" element={<Placeholder title="Activity Capture" subtitle="Capture actual work from site engineers using text, voice and photos."/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  </div>
</div>

export default function App() {
  const loggedIn = localStorage.getItem("projectsync_logged_in") === "true";
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={loggedIn ? <ProtectedLayout/> : <Navigate to="/login" replace/>}/>
    </Routes>
  );
}