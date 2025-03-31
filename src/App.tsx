import { useEffect, useState } from "react";
import AppLayout from "./AppLayout";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@mui/material";
import { useAppThemes } from "./useAppThemes.ts";

function App() {
  const [themeName, setThemeName] = useState("light");
  const { lightTheme, darkTheme } = useAppThemes();
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    if (themeName === "dark") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [themeName]);

  const toggleTheme = () =>
    setThemeName(themeName === "light" ? "dark" : "light");

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppLayout toggleTheme={toggleTheme}>
          <Routes>
            <Route index element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
