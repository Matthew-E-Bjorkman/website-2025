import CenteredDiv from "./CenteredDiv";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, keyframes, styled, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useMemo } from "react";
import isMobileView from "./isMobileView";

const ContainerCard = styled(Card)({
  width: "80%",
  height: "80%",
  borderRadius: "20px",
  border: "3px solid var(--border)",
  background: "var(--background2)",
});

const PageCardContent = styled(CardContent)({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "10px",
  marginLeft: "-10px",
});

const CardStack = styled(Stack)({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

const HeaderBox = styled(Box)({
  paddingTop: "10px",
  marginBottom: "-15px !important",
});

const ContentBox = styled(Box)({
  border: "3px solid var(--border)",
  borderRadius: "25px",
  backgroundColor: "var(--header-background)",
  width: "80%",
  height: isMobileView() ? "42%" : "50%",
  padding: "10px",
  marginTop: "70px !important",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
});

const CenteredTypography = styled(Typography)({
  textAlign: "center",
  color: "var(--text-primary)",
});

const JobTitleContainer = styled(Box)({
  overflow: "hidden",
  position: "relative",
  height: "2.5em",
  width: "100%",
  marginTop: "-60px",
});

// Ticker-style scroll animation
const scrollKeyframes = keyframes`
    0% { transform: translateX(0%); }
    100% { transform: translateX(-212%); } // This value will need to be adjusted if the first item in the list is changed
`;

const ScrollingContainer = styled(Box)({
  display: "flex",
  whiteSpace: "nowrap",
  animation: `${scrollKeyframes} 15s linear infinite`,
});

const TitleTypography = styled(Typography)({
  marginLeft: "30px",
  marginRight: "30px",
  display: "inline-block",
  whiteSpace: "nowrap",
  color: "var(--text-primary)",
});

const AboutPage = () => {
  const titles = useMemo(
    () => [
      "Game Developer",
      "Full-Stack Software Engineer",
      "Volleyball Player",
      "Lead Developer",
      "Political Activist",
      "Problem Solver",
    ],
    [],
  );

  return (
    <CenteredDiv style={{ background: "var(--background1)" }}>
      <ContainerCard>
        <PageCardContent>
          <CardStack direction="column" spacing={2}>
            <HeaderBox>
              <CenteredTypography variant="h1">Hello</CenteredTypography>
              <CenteredTypography variant="h4">My name is</CenteredTypography>
            </HeaderBox>
            <ContentBox>
              <CenteredTypography
                variant={isMobileView() ? "h3" : "h1"}
                sx={{ marginBottom: "10px" }}
              >
                Matthew Bjorkman
              </CenteredTypography>
              <JobTitleContainer>
                <ScrollingContainer>
                  {/* Double the titles so it loops into itself */}
                  {[...titles, ...titles].map((title, index) => (
                    <TitleTypography
                      key={index}
                      variant={isMobileView() ? "h5" : "h4"}
                    >
                      {title}
                    </TitleTypography>
                  ))}
                </ScrollingContainer>
              </JobTitleContainer>
            </ContentBox>
          </CardStack>
        </PageCardContent>
      </ContainerCard>
    </CenteredDiv>
  );
};

export default AboutPage;
