import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    name: string;
    background1: string;
    background2: string;
    background3: string;
    background4: string;
    background5: string;
    headerBackground: string;
    textPrimary: string;
    border: string;
  }

  interface ThemeOptions {
    name?: string;
    background1?: string;
    background2?: string;
    background3?: string;
    background4?: string;
    background5?: string;
    headerBackground?: string;
    textPrimary?: string;
    border: string;
  }
}

export const useAppThemes = () => {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
    name: "light",
    background1: "#B3EBF2",
    background2: "#dc8add",
    background3: "#f9f06b",
    background4: "#ea707d",
    background5: "#4377f1",
    headerBackground: "#f6eee3",
    textPrimary: "#121212",
    border: "#716D68",
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    name: "dark",
    background1: "#121212",
    background2: "#121212",
    background3: "#121212",
    background4: "#121212",
    background5: "#121212",
    headerBackground: "#3f3f3f",
    textPrimary: "#ffffff",
    border: "#ffffff",
  });

  return { lightTheme, darkTheme };
};
