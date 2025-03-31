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
import { useAppThemes } from "./useAppThemes.ts";

const MobileHeader = () => {
  const { themeName, toggleTheme } = useAppThemes();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Mobile</Typography>
        <Box display="flex" flexDirection="row">
          <IconButton>Home</IconButton>
          <IconButton>About</IconButton>
          <IconButton>Contact</IconButton>
        </Box>
        <Icon />
        <ToggleButton value={themeName} onClick={() => toggleTheme()}>
          <LightModeIcon
            sx={{ display: themeName === "light" ? "inline" : "none" }}
          />
          <DarkModeIcon
            sx={{ display: themeName === "dark" ? "inline" : "none" }}
          />
        </ToggleButton>
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
