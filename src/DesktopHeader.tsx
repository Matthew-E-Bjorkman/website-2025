import {
  AppBar,
  Box,
  styled,
  ToggleButton,
  Toolbar,
  Tooltip,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import PageButton from "./PageButton.tsx";
import { Download, GitHub, LinkedIn } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface HeaderProps {
  toggleTheme: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: "3px solid",
  borderColor: theme.border,
  height: "73px !important",
  background: theme.headerBackground,
  position: "static",
}));

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
  padding: "8px 450px 2px 450px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: "52px",
  border: "3px solid",
  borderColor: theme.border,
  borderRadius: "10px",
  padding: "11px",
}));

const StyledDownload = styled(Download)(({ theme }) => ({
  color: theme.border,
}));

const StyledGitHub = styled(GitHub)(({ theme }) => ({
  color: theme.border,
}));

const StyledLinkedIn = styled(LinkedIn)(({ theme }) => ({
  color: theme.border,
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: "3px solid",
  borderColor: theme.border,
  borderRadius: "150px",
}));

const DesktopHeader = ({ toggleTheme }: HeaderProps) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("home");

  const setPage = (pageName: string) => {
    setActiveTab(pageName);
  };

  const pages = [
    { name: "about", color: theme.background1 },
    { name: "skills", color: theme.background3 },
    { name: "projects", color: theme.background4 },
    { name: "contact", color: theme.background5 },
  ];

  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledBox>
          {pages.map((page) => (
            <PageButton
              pageName={page.name}
              pageColor={page.color}
              activePage={activeTab}
              setActivePage={setPage}
            />
          ))}
        </StyledBox>
        <Stack direction="row" spacing={2} position="fixed">
          <Tooltip title="LinkedIn">
            <StyledButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/matthewbjorkman/",
                  "LinkedIn",
                )
              }
            >
              <StyledLinkedIn />
            </StyledButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <StyledButton
              onClick={() =>
                window.open(
                  "https://github.com/Matthew-E-Bjorkman",
                  "GitHubWindow",
                )
              }
            >
              <StyledGitHub />
            </StyledButton>
          </Tooltip>
          <Tooltip title="Download Resume">
            <a href="../public/Resume.pdf" download="MatthewBjorkmanResume.pdf">
              <StyledButton>
                <StyledDownload />
              </StyledButton>
            </a>
          </Tooltip>
          <Tooltip title="Change Theme">
            <StyledToggleButton
              value={theme.name}
              onClick={() => toggleTheme()}
            >
              {theme.name === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </StyledToggleButton>
          </Tooltip>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default DesktopHeader;
