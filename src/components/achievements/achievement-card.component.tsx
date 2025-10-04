import { useCallback } from "react";
import { Achievement } from "../../data/achievements.data";

import { Card, Top, Name, Description, Footer } from "./styles";
import { CredBtn, HrzntlLn } from "../../utils/styles.util";
import { transcriptPageTranslations } from "../../utils/translations.util";
import { useCommonContext } from "../../contexts/common.context";
import { useAchievementContext } from "../../contexts/achievement.context";

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { language } = useCommonContext();
  const { setCurrAchievement } = useAchievementContext();

  const handleClick = useCallback(() => {
    setCurrAchievement!(achievement);
  }, [achievement, setCurrAchievement]);

  return (
    <Card>
      <Top>
        <Name>{achievement.title}</Name>
        <HrzntlLn />
      </Top>
      <Description>{achievement.description}</Description>
      <Footer>
        <CredBtn key={language} onClick={handleClick}>
          {transcriptPageTranslations.showCred[+language]}
        </CredBtn>
      </Footer>
    </Card>
  );
};

export default AchievementCard;
