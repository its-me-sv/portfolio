import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(4), []);

  return <h1>Projects</h1>;
};

export default ProjectsPage;
