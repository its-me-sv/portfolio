import { Container, LoadMore } from './styles';
import { projectsPageTranslations } from '../../utils/translations.util';

import ProjectCard from './project-card.component';
import { useProjectContext } from '../../contexts/project.context';
import { useCommonContext } from '../../contexts/common.context';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { isDark, language } = useCommonContext();
  const { projectIds, fetchProjects, currPage } = useProjectContext();

  return (
    <Container>
      {projectIds.map((projectId) => (
        <ProjectCard key={projectId} id={projectId} />
      ))}
      {currPage !== null && (
        <LoadMore onClick={fetchProjects} dark={isDark}>
          {projectsPageTranslations.ldPrj[+language]}
        </LoadMore>
      )}
    </Container>
  );
};

export default Projects;
