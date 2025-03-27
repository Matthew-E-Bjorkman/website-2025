import {
  AppBar,
  Box,
  IconButton,
  styled,
  ToggleButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router";
import { useState } from "react";

interface HeaderProps {
  toggleTheme: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: "3px solid",
  borderColor: theme.border,
  height: "73px !important",
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
  padding: "8px 400px 2px 400px",
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  height: "100%",
  border: "3px solid",
  borderRadius: "8px",
  borderBottom: "3px solid",
  borderColor: theme.border,
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
}));

const HomePageButton = styled(StyledIconButton)(({ theme }) => ({
  borderBottomColor: theme.background1,
  backgroundColor: theme.background1,
  ":hover": {
    backgroundColor: theme.background1,
    filter: "brightness(90%)",
  },
}));

const AboutPageButton = styled(StyledIconButton)(({ theme }) => ({
  borderBottomColor: theme.background2,
  backgroundColor: theme.background2,
  ":hover": {
    backgroundColor: theme.background2,
    filter: "brightness(90%)",
  },
}));

const SkillsPageButton = styled(StyledIconButton)(({ theme }) => ({
  borderBottomColor: theme.background3,
  backgroundColor: theme.background3,
  ":hover": {
    backgroundColor: theme.background3,
    filter: "brightness(90%)",
  },
}));

const ProjectsPageButton = styled(StyledIconButton)(({ theme }) => ({
  borderBottomColor: theme.background4,
  backgroundColor: theme.background4,
  ":hover": {
    backgroundColor: theme.background4,
    filter: "brightness(90%)",
  },
}));

const ContactPageButton = styled(StyledIconButton)(({ theme }) => ({
  borderBottomColor: theme.background5,
  backgroundColor: theme.background5,
  ":hover": {
    backgroundColor: theme.background5,
    filter: "brightness(90%)",
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: "3px solid",
  borderColor: theme.border,
  borderRadius: "150px",
}));

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

const DesktopHeader = ({ toggleTheme }: HeaderProps) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("home");

  return (
    <StyledAppBar
      style={{ background: theme.headerBackground }}
      position="static"
    >
      <StyledToolbar>
        <StyledBox>
          <StyledLink to="/" onClick={() => setActiveTab("home")}>
            <HomePageButton
              style={{
                borderBottom:
                  activeTab == "home" ? "" : "3px solid" + theme.border,
              }}
            >
              Home
            </HomePageButton>
          </StyledLink>
          <StyledLink to="/about" onClick={() => setActiveTab("about")}>
            <AboutPageButton
              style={{
                borderBottom:
                  activeTab == "about" ? "" : "3px solid" + theme.border,
              }}
            >
              About
            </AboutPageButton>
          </StyledLink>
          <StyledLink to="/skills" onClick={() => setActiveTab("skills")}>
            <SkillsPageButton
              style={{
                borderBottom:
                  activeTab == "skills" ? "" : "3px solid" + theme.border,
              }}
            >
              Skills
            </SkillsPageButton>
          </StyledLink>
          <StyledLink to="/projects" onClick={() => setActiveTab("projects")}>
            <ProjectsPageButton
              style={{
                borderBottom:
                  activeTab == "projects" ? "" : "3px solid" + theme.border,
              }}
            >
              Projects
            </ProjectsPageButton>
          </StyledLink>
          <StyledLink to="/contact" onClick={() => setActiveTab("contact")}>
            <ContactPageButton
              style={{
                borderBottom:
                  activeTab == "contact" ? "" : "3px solid" + theme.border,
              }}
            >
              Contact
            </ContactPageButton>
          </StyledLink>
        </StyledBox>
        <StyledToggleButton value={theme.name} onClick={() => toggleTheme()}>
          {theme.name === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </StyledToggleButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default DesktopHeader;
