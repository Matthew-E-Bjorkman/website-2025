import { useTheme } from "@mui/material";
import CenteredDiv from "./CenteredDiv";

const HomePage = () => {
  const theme = useTheme();

  return (
    <CenteredDiv style={{ background: theme.background1 }}>
      Home Page
    </CenteredDiv>
  );
};

export default HomePage;
