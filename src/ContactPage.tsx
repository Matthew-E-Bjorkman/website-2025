import { useTheme } from "@mui/material";
import CenteredDiv from "./CenteredDiv";

const ContactPage = () => {
  const theme = useTheme();

  return (
    <CenteredDiv style={{ background: theme.background5 }}>
      Contact Page
    </CenteredDiv>
  );
};

export default ContactPage;
