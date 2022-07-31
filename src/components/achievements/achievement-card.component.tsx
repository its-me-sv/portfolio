import { useCallback, useEffect } from "react";
import { Achievement } from "../../data/achievements.data";

import { Card, Top, Name, Description, Footer, Interactions } from './styles';
import { CredBtn, HrzntlLn } from "../../utils/styles.util";
import { transcriptPageTranslations } from '../../utils/translations.util';
import clapIcon from "../../assets/icons/clap.png";
import commentIcon from "../../assets/icons/comment.png";

import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface AchievementCardProps extends Achievement {}

const AchievementCard: React.FC<AchievementCardProps> = ({
  name, description, credUrl, verifyUrl
}) => {
  const { isDark, language } = useCommonContext();
  const { setCurrAchievement } = useAchievementContext();
  const { setCommentsMeta, onUnmount } = useCommentsContext();

  const handleClick = useCallback(() => {
    const achievement: Achievement = {
      name, description, credUrl,
      verifyUrl,
    };
    setCurrAchievement!(achievement);
  }, [name, description, credUrl, verifyUrl, credUrl]);

  const showComments = useCallback(
    () => setCommentsMeta!('Achievement', name), [name, setCommentsMeta]);

  useEffect(() => {
    return () => onUnmount!()
  }, []);

  return (
    <Card dark={isDark}>
      <Top>
        <Name dark={isDark}>{name}</Name>
        <HrzntlLn dark={isDark} />
      </Top>
      <Description dark={isDark}>{description}</Description>
      <Footer>
        <Interactions dark={isDark}>
          <div>
            <img src={clapIcon} alt="clap" />
            <span>37</span>
          </div>
          <div onClick={showComments}>
            <img src={commentIcon} alt="comment" />
            <span>34</span>
          </div>
        </Interactions>
        <CredBtn dark={isDark} key={language} onClick={handleClick}>
          {transcriptPageTranslations.showCred[+language]}
        </CredBtn>
      </Footer>
    </Card>
  );
};

export default AchievementCard;
