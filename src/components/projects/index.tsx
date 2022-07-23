import { Container } from './styles';

import { useCommonContext } from "../../contexts/common.context";
import ProjectCard from './project-card.component';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { isMobile } = useCommonContext();

  return (
    <Container mobile={isMobile}>
      {new Array(23).fill(7).map((_, idx) => (
        <ProjectCard key={idx} />
      ))}
    </Container>
  );
};

export default Projects;
