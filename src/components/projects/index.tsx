import { useCallback, useRef } from 'react';
import { Container } from './styles';

import ProjectCard from './project-card.component';
import { useProjectContext } from '../../contexts/project.context';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { projectIds, fetchProjects } = useProjectContext();

  const scrollRef = useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;

  const onScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    if (scrollTop + clientHeight === scrollHeight)
      fetchProjects!();
  }, [fetchProjects]);

  return (
    <Container ref={scrollRef} onScroll={onScroll}>
      {projectIds.map((projectId) => (
        <ProjectCard key={projectId} id={projectId} />
      ))}
    </Container>
  );
};

export default Projects;
