import { useEffect } from "react";

import { Container } from "./styles";

import AchievementCard from "../../components/achievement-card";
import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from "../../contexts/menu.context";
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementsPageProps {}

const AchievementsPage: React.FC<AchievementsPageProps> = () => {
  const { isMobile } = useCommonContext();
  const { setMenu } = useMenuContext();
  const { achievements } = useAchievementContext();

  useEffect(() => setMenu!(5), []);
  
  return (
    <Container mobile={isMobile}>
      {achievements.map(achievement => (
        <AchievementCard key={achievement.name} {...achievement} />
      ))}
    </Container>
  );
};

export default AchievementsPage;
