import {
  AppBar,
  Box,
  styled,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Download, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { useAppThemes } from "./useAppThemes.ts";
import { useNavigate } from "react-router";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "100%",
  padding: "0 12px",
});

const PageSelector = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "var(--text-primary)",
});

const PageText = styled(Box)({
  fontWeight: "bold",
  fontSize: "16px",
  color: "var(--text-primary)",
  textTransform: "capitalize",
  margin: "0 8px",
});

const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    backgroundColor: "var(--header-background)",
    borderRadius: "10px",
    border: "2px solid var(--border)",
    color: "var(--text-primary)",
  },
});

const StyledEmail = styled(Email)({
  color: "var(--text-primary)",
});

const StyledDownload = styled(Download)({
  color: "var(--text-primary)",
});

const StyledGitHub = styled(GitHub)({
  color: "var(--text-primary)",
});

const StyledLinkedIn = styled(LinkedIn)({
  color: "var(--text-primary)",
});

const MobileHeader = () => {
  const { themeName, toggleTheme } = useAppThemes();
  let defaultTab = "about";
  switch (window.location.pathname) {
    case "/":
      defaultTab = "about";
      break;
    case "/skills":
      defaultTab = "skills";
      break;
    case "/projects":
      defaultTab = "projects";
      break;
  }
  const [activePage, setActivePage] = useState(defaultTab);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const pages = [
    { name: "about", color: "var(--background1)" },
    { name: "skills", color: "var(--background2)" },
    { name: "projects", color: "var(--background3)" },
  ];

  // Find the active page object
  const activePageObj =
    pages.find((page) => page.name === activePage) || pages[0];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const changePage = (pageName: string) => {
    setActivePage(pageName);
    handleMenuClose();
    navigate(pageName === "about" ? "/" : `/${pageName}`);
  };

  const StyledAppBar = styled(AppBar)({
    borderBottom: "3px solid",
    borderColor: "var(--border)",
    height: "60px !important",
    background: activePageObj.color,
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1100,
  });

  return (
    <StyledAppBar>
      <StyledToolbar>
        <PageSelector>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <PageText>{activePage}</PageText>
        </PageSelector>

        <StyledMenu
          id="menu"
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.name}
              onClick={() => changePage(page.name)}
              sx={{
                backgroundColor:
                  activePage === page.name ? page.color : "inherit",
                "&:hover": { backgroundColor: page.color },
              }}
            >
              <ListItemText
                primary={page.name}
                sx={{ textTransform: "capitalize" }}
              />
            </MenuItem>
          ))}

          <Divider />

          <MenuItem
            onClick={() => {
              toggleTheme();
              handleMenuClose();
            }}
          >
            <ListItemIcon sx={{ color: "var(--text-primary)" }}>
              {themeName === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </ListItemIcon>
            <ListItemText
              primary={`${themeName === "light" ? "Light" : "Dark"} Theme`}
            />
          </MenuItem>

          <Divider />

          <MenuItem
            onClick={() => {
              window.location.href = "mailto:business@matthewbjorkman.com";
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <StyledEmail />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </MenuItem>

          <MenuItem
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/matthewbjorkman/",
                "LinkedIn",
              );
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <StyledLinkedIn />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </MenuItem>

          <MenuItem
            onClick={() => {
              window.open(
                "https://github.com/Matthew-E-Bjorkman",
                "GitHubWindow",
              );
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <StyledGitHub />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </MenuItem>

          <MenuItem
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Resume.pdf";
              link.download = "MatthewBjorkmanResume.pdf";
              link.click();
              handleMenuClose();
            }}
          >
            <ListItemIcon>
              <StyledDownload />
            </ListItemIcon>
            <ListItemText primary="Download Resume" />
          </MenuItem>
        </StyledMenu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MobileHeader;
