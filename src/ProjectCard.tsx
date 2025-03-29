import { Project } from "./types/Project";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import VerticalStack from "./VerticalStack";
import { Divider, styled, Typography, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";

export interface ProjectCardProps {
  project: Project;
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.headerBackground,
  borderRadius: "20px",
  border: `3px solid ${theme.border}`,
  width: "80%",
  height: "70%",
}));

const CardContentNoVerticalPadding = styled(CardContent)({
  padding: "0",
  paddingRight: "16px",
  paddingLeft: "16px",
});

const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();

  if (!project) {
    return <Card>No Project Data Provided</Card>;
  }

  return (
    <StyledCard variant="outlined">
      <Grid container spacing={2} height="100%">
        <Grid size={7}>
          <VerticalStack>
            <CardContentNoVerticalPadding>
              <Typography variant="h3" paddingTop="20px" marginBottom="-20px">
                {project.name} ({project.year})
              </Typography>
            </CardContentNoVerticalPadding>
            <CardContentNoVerticalPadding>
              <Typography
                fontSize={18}
                sx={{
                  paddingX: "8%",
                  paddingY: "3%",
                  marginLeft: "5%",
                  border: "3px solid " + theme.border,
                  borderRadius: "25px",
                  background: theme.background1,
                  color: theme.textPrimary,
                }}
              >
                {project.description}
              </Typography>
            </CardContentNoVerticalPadding>
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  {project.technologies.map((technology) => (
                    <Typography fontSize="medium">
                      {technology + " "}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <GitHubIcon fontSize="large" />
                {project.source_links.map((link) => (
                  <Button
                    key={link.url}
                    variant="outlined"
                    sx={{
                      background: theme.textPrimary,
                      color: theme.headerBackground,
                    }}
                    onClick={() => window.open(link.url, "GitHubWindow")}
                  >
                    {link.name}
                  </Button>
                ))}
              </CardActions>
            </Stack>
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
              border: "2px solid" + theme.border,
            }}
          />
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProjectCard;
