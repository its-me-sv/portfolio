import { useEffect } from "react";

import { Container } from "./styles";
import Experiences from "../../components/experiences";
import { useMenuContext } from "../../contexts/menu.context";

interface ExperiencesPageProps {}

const ExperiencePage: React.FC<ExperiencesPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(4), []);

  return (
	  <Container>
		<Experiences />
	  </Container>
	);
};

export default ExperiencePage;
