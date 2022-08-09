import { useEffect } from "react";

import { Container } from './styles';

import SearchBar from '../../components/search-bar';
import Projects from '../../components/projects';
import { useMenuContext } from "../../contexts/menu.context";
import { useProjectContext } from "../../contexts/project.context";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { setMenu } = useMenuContext();
  const { fetchProjects, resetProjects, currPage } = useProjectContext();

  useEffect(() => {
    setMenu!(4);
    fetchProjects!();
    return () => resetProjects!();
  }, []);

  return (
    <Container>
      {currPage === null ?  <SearchBar /> : <div />}
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
