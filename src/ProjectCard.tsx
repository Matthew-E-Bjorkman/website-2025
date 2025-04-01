import { Project } from "./types/Project";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import VerticalStack from "./VerticalStack";
import { Divider, styled, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";

export interface ProjectCardProps {
  project: Project;
}

const StyledCard = styled(Card)({
  backgroundColor: "var(--header-background)",
  borderRadius: "20px",
  border: "3px solid var(--border)",
  width: "80%",
  height: "80%",
});

const CardContentNoVerticalPadding = styled(CardContent)({
  padding: "0",
  paddingRight: "16px",
  paddingLeft: "16px",
});

const TitleTypography = styled(Typography)({
  paddingTop: "20px",
  marginBottom: "-20px",
  color: "var(--text-primary)",
  textWrap: "nowrap",
});

const DescriptionTypography = styled(Typography)({
  padding: "3% 8% 3% 8%",
  marginLeft: "5%",
  border: "3px solid var(--border)",
  borderRadius: "25px",
  backgroundColor: "var(--background1)",
  color: "var(--text-primary)",
  fontSize: "18px",
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

  return (
    <StyledCard variant="outlined">
      <Grid container spacing={2} height="100%">
        <Grid size={7}>
          <VerticalStack>
            <CardContentNoVerticalPadding>
              <TitleTypography variant="h3">
                {project.name} ({project.year})
              </TitleTypography>
            </CardContentNoVerticalPadding>
            <CardContentNoVerticalPadding>
              <DescriptionTypography>
                {project.description}
              </DescriptionTypography>
            </CardContentNoVerticalPadding>
            <CenteredStack>
              <CardContent>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  {project.technologies.map((technology) => (
                    <Typography fontSize="medium" color="var(--text-primary)">
                      {technology + " "}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
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
            </CenteredStack>
          </VerticalStack>
        </Grid>
        <Grid
          size={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            src={"/" + project.img_name}
            alt={project.name + " image"}
            sx={{
              textAlign: "center",
              height: "70%",
              width: "90%",
              borderRadius: "25px",
              border: "2px solid var(--border)",
            }}
          />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProjectCard;
