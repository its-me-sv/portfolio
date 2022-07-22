import { useEffect } from "react";

import { Container } from './styles';

import SearchBar from '../../components/search-bar';
import Projects from '../../components/projects';
import { useMenuContext } from "../../contexts/menu.context";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(4), []);

  return (
    <Container>
      <SearchBar />
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
