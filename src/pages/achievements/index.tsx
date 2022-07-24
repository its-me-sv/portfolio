import { useEffect } from "react";

import { Container } from "./styles";

import Achievements from "../../components/achievements";
import AchievementOverview from "../../components/achievements/achievement-overview.component";
import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from "../../contexts/menu.context";
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementsPageProps {}

const AchievementsPage: React.FC<AchievementsPageProps> = () => {
  const { isMobile } = useCommonContext();
  const { setMenu } = useMenuContext();
  const { currAchievement } = useAchievementContext();

  useEffect(() => setMenu!(5), []);
  
  return (
    <>
      {currAchievement && <AchievementOverview />}
      <Container mobile={isMobile}>
        <Achievements />
      </Container>
    </>
  );
};

export default AchievementsPage;
