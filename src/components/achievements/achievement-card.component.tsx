import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Achievement, AchievementStats } from "../../data/achievements.data";
import { API_URL } from "../../utils/constants.util";

import { Card, Top, Name, Description, Footer, Interactions } from './styles';
import { CredBtn, HrzntlLn } from "../../utils/styles.util";
import { transcriptPageTranslations } from '../../utils/translations.util';
import clapIcon from "../../assets/icons/clap.png";
import commentIcon from "../../assets/icons/comment.png";

import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface AchievementCardProps {
  id: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({id}) => {
  const { isDark, language } = useCommonContext();
  const { setCurrAchievement } = useAchievementContext();
  const { setCommentsMeta, onUnmount } = useCommentsContext();

  const [achievement, setAchievement] = useState<Achievement|null>();
  const [stats, setStats] = useState<AchievementStats|null>();

  const handleClick = useCallback(() => {
    setCurrAchievement!(achievement as Achievement);
  }, [achievement, setCurrAchievement]);

  const showComments = useCallback(
    () => setCommentsMeta!("Achievement", achievement?.title as string),
    [achievement?.title, setCommentsMeta]
  );

  useEffect(() => {
    axios.post(`${API_URL}/api/achievements/${id}`)
    .then(({data}) => setAchievement(data));
    axios.post(`${API_URL}/api/achievements/stats/${id}`)
    .then(({data}) => setStats(data));
    return () => onUnmount!();
  }, [id, onUnmount]);

  return (
    <Card dark={isDark}>
      <Top>
        <Name dark={isDark}>{achievement?.title}</Name>
        <HrzntlLn dark={isDark} />
      </Top>
      <Description dark={isDark}>{achievement?.description}</Description>
      <Footer>
        <Interactions dark={isDark}>
          <div>
            <img src={clapIcon} alt="clap" />
            <span>{stats?.appreciations !== "0" ? stats?.appreciations : ""}</span>
          </div>
          <div onClick={showComments}>
            <img src={commentIcon} alt="comment" />
            <span>{stats?.comments !== "0" ? stats?.comments : ""}</span>
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
