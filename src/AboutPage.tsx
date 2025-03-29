import { useTheme } from "@mui/material";
import CenteredDiv from "./CenteredDiv";

const AboutPage = () => {
  const theme = useTheme();

  return (
    <CenteredDiv style={{ background: theme.background2 }}>
      About Page
    </CenteredDiv>
  );
};

export default AboutPage;
