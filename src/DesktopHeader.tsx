import {
  AppBar,
  Box,
  IconButton,
  styled,
  ToggleButton,
  Toolbar,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

interface HeaderProps {
  toggleTheme: () => void;
}

const StyledAppBar = styled(AppBar)({
  background: "#f6eee3", // Paper color
  borderBottom: "4px solid black",
  height: "73px !important",
  marginTop: "10px",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "end",
  height: "100%",
});

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  padding: "8px 500px 0 500px",
});

const StyledIconButton = styled(IconButton)({
  border: "4px solid black",
  borderRadius: "5px",
  borderBottom: "4px solid #B3EBF2",
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
  backgroundColor: "#B3EBF2",
  ":hover": {
    background: "#B3EBF2",
  },
});

const StyledToggleButton = styled(ToggleButton)({
  border: "3px solid",
  borderColor: "black",
  borderRadius: "10px",
});

const DesktopHeader = ({ toggleTheme }: HeaderProps) => {
  const theme: string = useContext(ThemeContext);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledBox>
          <StyledIconButton>Home</StyledIconButton>
          <StyledIconButton>About</StyledIconButton>
          <StyledIconButton>Contact</StyledIconButton>
        </StyledBox>
        <StyledToggleButton value={theme} onClick={() => toggleTheme()}>
          {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </StyledToggleButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default DesktopHeader;
