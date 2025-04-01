import AppLayout from "./AppLayout";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
