import { useEffect } from "react";

import { Container } from './styles';

import SearchBar from '../../components/search-bar';
import { useMenuContext } from "../../contexts/menu.context";
import { useProjectContext } from '../../contexts/project.context';

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { setMenu } = useMenuContext();
  const { searchField } = useProjectContext();

  useEffect(() => setMenu!(4), []);

  return (
    <Container>
      <SearchBar />
      <h1>Text: {searchField}</h1>
    </Container>
  );
};

export default ProjectsPage;
