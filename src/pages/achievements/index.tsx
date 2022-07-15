import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";

interface AchievementsPageProps {}

const AchievementsPage: React.FC<AchievementsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(5), []);
  
  return <h1>Achievements</h1>;
};

export default AchievementsPage;
