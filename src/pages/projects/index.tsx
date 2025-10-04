import { useEffect, useState } from "react";

import { Container } from './styles';

import SearchBar from '../../components/search-bar';
import Projects from '../../components/projects';
import { useMenuContext } from "../../contexts/menu.context";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { setMenu } = useMenuContext();
  const [searchField, setSearchField] = useState<string>("");

  useEffect(() => {
    setMenu!(5);
  }, []);

  return (
    <Container>
      <SearchBar {...{searchField, setSearchField}} />
      <Projects searchField={searchField.toLowerCase()} />
    </Container>
  );
};

export default ProjectsPage;
