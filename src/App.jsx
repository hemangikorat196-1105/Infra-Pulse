import React from "react";
import { Routes, Route, Navigate, useParams, useNavigate, Link } from "react-router-dom";
import { AppShell } from "./components/common";
import * as Pages from "./pages";

export default function App() {
  const [dark,setDark]=React.useState(localStorage.getItem("infrapulse-theme")==="dark");
  const [projectId,setProjectId]=React.useState(localStorage.getItem("infrapulse-project")||"P-1042");
  React.useEffect(()=>{document.documentElement.classList.toggle("dark",dark);localStorage.setItem("infrapulse-theme",dark?"dark":"light")},[dark]);
  React.useEffect(()=>localStorage.setItem("infrapulse-project",projectId),[projectId]);
  return <Routes>
    <Route path="/login" element={<Pages.Login/>}/>
    <Route path="*" element={<AppShell dark={dark} setDark={setDark} projectId={projectId} setProjectId={setProjectId}><Routes>
      <Route index element={<Navigate to="/dashboard" replace/>}/>
      <Route path="dashboard" element={<Pages.Dashboard projectId={projectId}/>}/>
      <Route path="projects" element={<Pages.Projects/>}/>
      <Route path="projects/:projectId" element={<Pages.ProjectWorkspace/>}/>
      <Route path="schedule" element={<Pages.Schedule projectId={projectId}/>}/>
      <Route path="site-progress" element={<Pages.SiteProgress projectId={projectId}/>}/>
      <Route path="daily-reports" element={<Pages.DailyReports projectId={projectId}/>}/>
      <Route path="photos-documents" element={<Pages.PhotosDocuments projectId={projectId}/>}/>
      <Route path="ai-review" element={<Pages.AIReview projectId={projectId}/>}/>
      <Route path="analytics" element={<Pages.Analytics projectId={projectId}/>}/>
      <Route path="alerts" element={<Pages.Alerts/>}/>
      <Route path="team" element={<Pages.Team/>}/>
      <Route path="settings" element={<Pages.Settings/>}/>
      <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
    </Routes></AppShell>}/>
  </Routes>;
}
