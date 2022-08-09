import { useCallback, useRef } from 'react';
import { Container, LoadMore } from './styles';
import { projectsPageTranslations } from "../../utils/translations.util";

import ProjectCard from './project-card.component';
import { useProjectContext } from '../../contexts/project.context';
import { useCommonContext } from "../../contexts/common.context";
import { filteredProjects } from '../../utils/projects.util';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { language } = useCommonContext();
  const { projectIds, fetchProjects, currPage, searchField, dataMapper } = useProjectContext();

  const scrollRef = useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;

  const onScroll = useCallback(() => {
    if (!scrollRef.current) return;
    if (searchField.length > 0) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    if ((scrollTop + clientHeight) >= scrollHeight)
    fetchProjects!();
  }, [fetchProjects, searchField.length]);

  return (
    <Container ref={scrollRef} onScroll={onScroll}>
      {projectIds.filter(projId => filteredProjects(dataMapper, projId, searchField))
      .map(projectId => (
        <ProjectCard key={projectId} id={projectId} />
      ))}
      {(currPage !== null && searchField.length === 0) && (
        <LoadMore onClick={fetchProjects}>
          {projectsPageTranslations.ldPrj[+language]}
        </LoadMore>
      )}
    </Container>
  );
};

export default Projects;
