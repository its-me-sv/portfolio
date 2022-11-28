import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";

interface ExperiencesPageProps {}

const ExperiencePage: React.FC<ExperiencesPageProps> = () => {
	const { setMenu } = useMenuContext();

	useEffect(() => {
		setMenu!(4);
	}, []);

  return <></>;
};

export default ExperiencePage;
