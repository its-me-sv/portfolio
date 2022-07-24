import AchievementCard from "./achievement-card.component";
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementsProps {}

const Achievements: React.FC<AchievementsProps> = () => {
  const { achievements } = useAchievementContext();
  
  return (
    <>
      {achievements.map(achievement => (
        <AchievementCard key={achievement.name} {...achievement} />
      ))}
    </>
  );
};

export default Achievements;
