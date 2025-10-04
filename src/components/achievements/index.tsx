import { ACHIEVEMENTS } from "../../data/achievements.data";
import AchievementCard from "./achievement-card.component";

interface AchievementsProps {}

const Achievements: React.FC<AchievementsProps> = () => {
  
  return (
    <>
      {ACHIEVEMENTS.map(achievement => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </>
  );
};

export default Achievements;
