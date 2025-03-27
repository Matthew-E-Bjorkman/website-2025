import { styled, useTheme } from "@mui/material";

const CenteredDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  fontSize: "150px",
  color: theme.textPrimary,
}));

const SkillsPage = () => {
  const theme = useTheme();

  return (
    <CenteredDiv style={{ background: theme.background3 }}>
      Skills Page
    </CenteredDiv>
  );
};

export default SkillsPage;
