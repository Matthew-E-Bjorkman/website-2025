import { IconButton, styled, useTheme } from "@mui/material";
import { Link } from "react-router";

export interface PageButtonProps {
  pageName: string;
  activePage: string;
  pageColor: string;
  setActivePage: (activePage: string) => void;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  height: "100%",
  border: "3px solid",
  borderRadius: "8px",
  borderBottom: "3px solid",
  borderColor: theme.border,
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
}));

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
  const theme = useTheme();

  return (
    <StyledLink
      to={pageName === "about" ? "/" : "/" + pageName}
      onClick={() => setActivePage(pageName)}
    >
      <StyledIconButton
        style={{
          borderBottomColor: activePage == pageName ? pageColor : theme.border,
          backgroundColor: pageColor,
        }}
      >
        {pageName.charAt(0).toUpperCase() + pageName.substring(1)}
      </StyledIconButton>
    </StyledLink>
  );
};

export default PageButton;
