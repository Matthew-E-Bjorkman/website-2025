import CenteredDiv from "./CenteredDiv";
import ProjectCard from "./ProjectCard";
import CardCarousel from "./CardCarousel";
import { Project } from "./types/Project";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import projectsJSON from "./data/Projects.json";

const ProjectsPage = () => {
  const projects: Project[] = projectsJSON.projects;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projectCards = projects.map((project) => (
    <Box
      key={project.name}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ProjectCard project={project} />
    </Box>
  ));

  return (
    <CenteredDiv
      style={{
        background: "var(--background3)",
        padding: isMobile ? "10px 0 30px" : undefined,
      }}
    >
      <CardCarousel cards={projectCards} />
    </CenteredDiv>
  );
};

export default ProjectsPage;
