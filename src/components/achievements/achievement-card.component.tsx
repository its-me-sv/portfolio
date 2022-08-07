import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Achievement, AchievementStats } from "../../data/achievements.data";
import { API_URL } from "../../utils/constants.util";

import { 
  Card, Top, Name, Description, 
  Footer, Interactions, 
  ClapIcon, CommentIcon 
} from './styles';
import { CredBtn, HrzntlLn } from "../../utils/styles.util";
import { transcriptPageTranslations } from '../../utils/translations.util';
import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';
import { useCommentsContext } from '../../contexts/comments.context';
import { useUserContext } from "../../contexts/user.context";

interface AchievementCardProps {
  id: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({id}) => {
  const { isDark, language } = useCommonContext();
  const { setCurrAchievement } = useAchievementContext();
  const { setCommentsMeta, onUnmount, setCallbacks } = useCommentsContext();
  const { likes, addLike, removeLike } = useUserContext();

  const [achievement, setAchievement] = useState<Achievement|null>();
  const [stats, setStats] = useState<AchievementStats|null>();
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    setLiked(likes.includes(id));
    axios.post(`${API_URL}/api/achievements/${id}`)
    .then(({data}) => setAchievement(data));
    axios.post(`${API_URL}/api/achievements/stats/${id}`)
    .then(({data}) => setStats(data));
    return () => onUnmount!();
  }, [id, onUnmount]);

  const handleClick = useCallback(() => {
    setCurrAchievement!(achievement as Achievement);
  }, [achievement, setCurrAchievement]);

  const incCmt = () => {
    setStats(prev => ({
      comments: `${+(prev?.comments as string) + 1}`,
      appreciations: prev?.appreciations as string,
    }));
  };

  const decCmt = () => {
    setStats(prev => ({
      comments: `${+(prev?.comments as string) - 1}`,
      appreciations: prev?.appreciations as string,
    }));
  };

  const showComments = useCallback(() => {
    setCommentsMeta!("Achievement", achievement?.title as string);
    setCallbacks!({incCmt, decCmt});
  },[achievement?.title, setCommentsMeta, setCallbacks]);

  const toggleLike = () => {
    if (!liked) {
      axios.put(`${API_URL}/api/achievements/like/${id}`)
      .then(() => {
        setStats(prev => ({
          appreciations: `${(+(prev?.appreciations as string))+1}`, 
          comments: prev?.comments as string
        }));
        addLike!(id);
        setLiked(true);
      });
    } else {
      axios.put(`${API_URL}/api/achievements/dislike/${id}`)
      .then(() => {
        setStats(prev => ({
          appreciations: `${(+(prev?.appreciations as string))-1}`, 
          comments: prev?.comments as string
        }));
        removeLike!(id);
        setLiked(false);
      });
    }
  };

  return (
    <Card dark={isDark}>
      <Top>
        <Name dark={isDark}>{achievement?.title}</Name>
        <HrzntlLn dark={isDark} />
      </Top>
      <Description dark={isDark}>{achievement?.description}</Description>
      <Footer>
        <Interactions dark={isDark}>
          <div onClick={toggleLike}>
            <ClapIcon liked={liked} dark={isDark} />
            <span>
              {stats?.appreciations !== "0" ? stats?.appreciations : ""}
            </span>
          </div>
          <div onClick={showComments}>
            <CommentIcon dark={isDark} />
            <span>
              {stats?.comments !== "0" ? stats?.comments : ""}
            </span>
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
