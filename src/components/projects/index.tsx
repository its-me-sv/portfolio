import { Container } from './styles';

import ProjectCard from './project-card.component';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <Container>
      {new Array(23).fill(7).map((_, idx) => (
        <ProjectCard key={idx} />
      ))}
    </Container>
  );
};

export default Projects;
