import { Container } from "./styles";

import ProjectCard from "./project-card.component";
import { PROJECTS } from "../../data/projects.data";

interface ProjectsProps {
  searchField: string;
}

const Projects: React.FC<ProjectsProps> = ({ searchField }) => {
  return (
    <Container>
      {PROJECTS.filter((project) => project.title.toLowerCase().includes(searchField) || project.description.toLowerCase().includes(searchField) || project.tech_stack.some((tech) => tech.toLowerCase().includes(searchField))).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Container>
  );
};

export default Projects;
