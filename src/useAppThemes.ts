import { useEffect, useState } from "react";

export const useAppThemes = () => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    if (themeName === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [themeName]);

  const toggleTheme = () =>
    setThemeName(themeName === "light" ? "dark" : "light");

  return { themeName, toggleTheme };
};
