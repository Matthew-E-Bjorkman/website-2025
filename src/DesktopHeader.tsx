import {
  AppBar,
  Box,
  Icon,
  IconButton,
  ToggleButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

interface HeaderProps {
  toggleTheme: () => void;
}

const DesktopHeader = ({ toggleTheme }: HeaderProps) => {
  const theme: string = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Desktop</Typography>
        <Box display="flex" flexDirection="row">
          <IconButton>Home</IconButton>
          <IconButton>About</IconButton>
          <IconButton>Contact</IconButton>
        </Box>
        <Icon />
        <ToggleButton value={theme} onClick={() => toggleTheme()}>
          <LightModeIcon
            sx={{ display: theme === "light" ? "inline" : "none" }}
          />
          <DarkModeIcon
            sx={{ display: theme === "dark" ? "inline" : "none" }}
          />
        </ToggleButton>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopHeader;
