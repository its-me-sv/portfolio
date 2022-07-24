import { useEffect } from "react";

import { Container } from "./styles";
import { achievements } from '../../utils/achievements-data';

import AchievementCard from "../../components/achievement-card";
import { useMenuContext } from "../../contexts/menu.context";

interface AchievementsPageProps {}

const AchievementsPage: React.FC<AchievementsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(5), []);
  
  return (
    <Container>
      {achievements.map(achievement => (
        <AchievementCard key={achievement.name} {...achievement} />   
      ))}
    </Container>
  );
};

export default AchievementsPage;
