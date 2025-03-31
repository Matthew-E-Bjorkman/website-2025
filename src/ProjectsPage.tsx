import CenteredDiv from "./CenteredDiv";
import ProjectCard from "./ProjectCard";
import CardCarousel from "./CardCarousel";
import { Project } from "./types/Project";

import projectsJSON from "./data/Projects.json";

const ProjectsPage = () => {
  const projects: Project[] = projectsJSON.projects;
  const projectCards = projects.map((project) => (
    <ProjectCard project={project} key={project.name} />
  ));

  return (
    <CenteredDiv style={{ background: "var(--background4)" }}>
      <CardCarousel cards={projectCards} />
    </CenteredDiv>
  );
};

export default ProjectsPage;
