import { useTheme } from "@mui/material";
import CenteredDiv from "./CenteredDiv";

const SkillsPage = () => {
  const theme = useTheme();

  return (
    <CenteredDiv style={{ background: theme.background3 }}>
      Skills Page
    </CenteredDiv>
  );
};

export default SkillsPage;
