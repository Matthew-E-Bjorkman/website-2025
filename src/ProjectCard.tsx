import { Project } from "./types/Project";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2"; // Using Grid2 as requested
import VerticalStack from "./VerticalStack";
import { Divider, styled, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import isMobileView from "./isMobileView.ts";

export interface ProjectCardProps {
  project: Project;
}

const StyledCard = styled(Card)({
  backgroundColor: "var(--header-background)",
  borderRadius: "20px",
  border: "3px solid var(--border)",
});

const CardContentNoVerticalPadding = styled(CardContent)({
  padding: "0",
  paddingRight: "16px",
  paddingLeft: "16px",
});

const TitleTypography = styled(Typography)({
  paddingTop: "20px",
  color: "var(--text-primary)",
});

const DescriptionTypography = styled(Typography)({
  border: "3px solid var(--border)",
  borderRadius: "25px",
  backgroundColor: "var(--background1)",
  color: "var(--text-primary)",
});

const CenteredStack = styled(Stack)({
  alignItems: "center",
  justifyContent: "flex-end",
});

const StyledGitHubIcon = styled(GitHubIcon)({
  color: "var(--text-primary)",
});

const ProjectCard = ({ project }: ProjectCardProps) => {
  if (!project) {
    return <Card>No Project Data Provided</Card>;
  }

  const isMobile = isMobileView();

  return (
    <StyledCard
      variant="outlined"
      sx={{
        width: isMobile ? "90%" : "80%",
        height: isMobile ? "auto" : "80%",
        margin: isMobile ? "10px 0" : undefined, // Added margin only for mobile
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Grid size={{ xs: isMobile ? 12 : 7 }}>
          <VerticalStack>
            <CardContentNoVerticalPadding>
              <TitleTypography
                variant={isMobile ? "h5" : "h3"}
                sx={{
                  textWrap: isMobile ? "wrap" : "nowrap",
                  fontSize: isMobile ? "1.5rem" : undefined,
                  paddingBottom: isMobile ? "5px" : undefined,
                }}
              >
                {project.name} ({project.year})
              </TitleTypography>
            </CardContentNoVerticalPadding>
            <CardContentNoVerticalPadding>
              <DescriptionTypography
                sx={{
                  padding: isMobile ? "4% 4%" : "3% 8% 3% 8%",
                  marginLeft: isMobile ? "1%" : "5%",
                  marginRight: isMobile ? "1%" : "0",
                  fontSize: isMobile ? "15px" : "18px",
                  maxHeight: isMobile ? "120px" : "unset",
                  overflow: isMobile ? "auto" : "visible",
                }}
              >
                {project.description}
              </DescriptionTypography>
            </CardContentNoVerticalPadding>
            <CenteredStack>
              <CardContent>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={isMobile ? 1 : 2}
                  sx={{
                    flexWrap: isMobile ? "wrap" : "nowrap",
                    justifyContent: "center",
                    maxWidth: isMobile ? "100%" : "unset",
                  }}
                >
                  {project.technologies.map((technology, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      color="var(--text-primary)"
                      sx={{
                        fontSize: isMobile ? "14px" : undefined,
                        padding: isMobile ? "0 4px" : undefined,
                      }}
                    >
                      {technology}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </CenteredStack>
            <CardActions>
              <StyledGitHubIcon fontSize="large" />
              {project.source_links.map((link) => (
                <Button
                  key={link.url}
                  variant="outlined"
                  sx={{
                    background: "var(--text-primary)",
                    color: "var(--header-background)",
                  }}
                  onClick={() => window.open(link.url, "GitHubWindow")}
                >
                  {link.name}
                </Button>
              ))}
            </CardActions>
          </VerticalStack>
        </Grid>
        <Grid size={{ xs: isMobile ? 12 : 5 }}>
          <CardMedia
            component="img"
            image={`/${project.img_name}`}
            alt={project.name}
            sx={{
              height: isMobile ? "200px" : "100%", // Fixed height just for mobile
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProjectCard;
