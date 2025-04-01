import { IconButton, styled } from "@mui/material";
import { Link } from "react-router";

export interface PageButtonProps {
  pageName: string;
  activePage: string;
  pageColor: string;
  setActivePage: (activePage: string) => void;
}

const StyledIconButton = styled(IconButton)({
  height: "100%",
  minWidth: "50px",
  width: "16vw",
  maxWidth: "300px",
  border: "3px solid",
  borderRadius: "8px",
  borderBottom: "3px solid",
  borderColor: "var(--border)",
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
  color: "var(--text-primary)",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    filter: "brightness(90%)",
  },
});

const PageButton = ({
  pageName,
  activePage,
  pageColor,
  setActivePage,
}: PageButtonProps) => {
  return (
    <StyledLink
      to={pageName === "about" ? "/" : "/" + pageName}
      onClick={() => setActivePage(pageName)}
    >
      <StyledIconButton
        style={{
          borderBottomColor:
            activePage == pageName ? pageColor : "var(--border)",
          backgroundColor: pageColor,
        }}
      >
        {pageName.charAt(0).toUpperCase() + pageName.substring(1)}
      </StyledIconButton>
    </StyledLink>
  );
};

export default PageButton;
