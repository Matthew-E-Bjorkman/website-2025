import { styled, useTheme } from "@mui/material";

const CenteredDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  fontSize: "150px",
  color: theme.textPrimary,
}));

const AboutPage = () => {
  const theme = useTheme();

  return (
    <CenteredDiv style={{ background: theme.background2 }}>
      About Page
    </CenteredDiv>
  );
};

export default AboutPage;
