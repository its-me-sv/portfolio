import { Container } from './styles';

import ProjectCard from './project-card.component';
import { useProjectContext } from '../../contexts/project.context';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { projectIds } = useProjectContext();

  return (
    <Container>
      {projectIds.map(projectId => (
        <ProjectCard key={projectId} id={projectId} />
      ))}
    </Container>
  );
};

export default Projects;
