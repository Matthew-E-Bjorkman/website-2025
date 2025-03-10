import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import AppLayout from "./AppLayout";
import HomePage from "./HomePage";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <AppLayout toggleTheme={toggleTheme}>
        <HomePage />
      </AppLayout>
    </ThemeContext.Provider>
  );
}

export default App;
