import { useEffect } from "react";

import { Container } from "./styles";

import Achievements from "../../components/achievements";
import AchievementOverview from "../../components/achievements/achievement-overview.component";
import { useMenuContext } from "../../contexts/menu.context";
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementsPageProps {}

const AchievementsPage: React.FC<AchievementsPageProps> = () => {
  const { setMenu } = useMenuContext();
  const { currAchievement } = useAchievementContext();

  useEffect(() => setMenu!(5), []);
  
  return (
    <>
      {currAchievement && <AchievementOverview />}
      <Container>
        <Achievements />
      </Container>
    </>
  );
};

export default AchievementsPage;
