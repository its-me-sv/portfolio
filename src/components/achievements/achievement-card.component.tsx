import { useCallback } from "react";
import { Achievement } from "../../utils/achievements-data";

import { Card, Top, Name, Description, Footer, Interactions } from './styles';
import { CredBtn, HrzntlLn } from "../../utils/styles.util";
import { transcriptTranslations } from '../../utils/translations.util';
import likeIcon from "../../assets/icons/like.png";
import commentIcon from "../../assets/icons/comment.png";

import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementCardProps extends Achievement {}

const AchievementCard: React.FC<AchievementCardProps> = ({
  name, description, credUrl, verifyUrl
}) => {
  const { isDark, language, isMobile } = useCommonContext();
  const { setCurrAchievement } = useAchievementContext();

  const handleClick = useCallback(() => {
    const achievement: Achievement = {
      name, description, credUrl,
      verifyUrl,
    };
    setCurrAchievement!(achievement);
  }, [name, description, credUrl, verifyUrl, credUrl]);

  return (
    <Card dark={isDark} mobile={isMobile} >
      <Top>
        <Name dark={isDark}>{name}</Name>
        <HrzntlLn dark={isDark} />
      </Top>
      <Description dark={isDark}>{description}</Description>
      <Footer>
        <Interactions dark={isDark}>
          <div>
            <img src={likeIcon} alt="clap" />
            <span>37</span>
          </div>
          <div>
            <img src={commentIcon} alt="comment" />
            <span>34</span>
          </div>
        </Interactions>
        <CredBtn 
          dark={isDark} 
          key={language}
          onClick={handleClick}
        >
          {transcriptTranslations.showCred[+language]}
        </CredBtn>
      </Footer>
    </Card>
  );
};

export default AchievementCard;
