import {
  AppBar,
  Box,
  styled,
  ToggleButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import PageButton from "./PageButton.tsx";
import { Download, Email, GitHub, LinkedIn } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useAppThemes } from "./useAppThemes.ts";

const StyledAppBar = styled(AppBar)({
  borderBottom: "3px solid",
  borderColor: "var(--border)",
  height: "73px !important",
  background: "var(--header-background)",
  position: "static",
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
  padding: "8px 7vw 2px 7vw",
});

const StyledButton = styled(Button)({
  minWidth: "52px",
  border: "3px solid",
  borderColor: "var(--border)",
  borderRadius: "10px",
  padding: "11px",
});

const StyledEmail = styled(Email)({
  color: "var(--border)",
});

const StyledDownload = styled(Download)({
  color: "var(--border)",
});

const StyledGitHub = styled(GitHub)({
  color: "var(--border)",
});

const StyledLinkedIn = styled(LinkedIn)({
  color: "var(--border)",
});

const StyledToggleButton = styled(ToggleButton)({
  border: "3px solid",
  borderColor: "var(--border)",
  borderRadius: "150px",
  color: "var(--border)",
});

const DesktopHeader = () => {
  const { themeName, toggleTheme } = useAppThemes();
  const [activeTab, setActiveTab] = useState("about");

  const setPage = (pageName: string) => {
    setActiveTab(pageName);
  };

  const pages = [
    { name: "about", color: "var(--background1)" },
    { name: "skills", color: "var(--background3)" },
    { name: "projects", color: "var(--background4)" },
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
        <Stack direction="row" spacing={2}>
          <Tooltip title="Contact Me">
            <a href="mailto:business@matthewbjorkman.com">
              <StyledButton>
                <StyledEmail />
              </StyledButton>
            </a>
          </Tooltip>
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
            <a href="/Resume.pdf" download="MatthewBjorkmanResume.pdf">
              <StyledButton>
                <StyledDownload />
              </StyledButton>
            </a>
          </Tooltip>
          <Tooltip title="Change Theme">
            <StyledToggleButton value={themeName} onClick={() => toggleTheme()}>
              {themeName === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </StyledToggleButton>
          </Tooltip>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default DesktopHeader;
