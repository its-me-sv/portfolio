import { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Achievement, AchievementStats } from "../../data/achievements.data";
import commentIcon from '../../assets/icons/comment.png';
import { API_URL } from "../../utils/constants.util";

import { 
  Card, Top, Name, Description, 
  Footer, Interactions, 
  ClapIcon
} from './styles';
import { InteractionIcon } from "../../utils/styles.util";
import { CredBtn, HrzntlLn } from "../../utils/styles.util";
import { transcriptPageTranslations } from '../../utils/translations.util';
import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';
import { useCommentsContext } from '../../contexts/comments.context';
import { useUserContext } from "../../contexts/user.context";

const defaultAchievement: Achievement = {
  title: '-',
  description: '-',
  credential_link: '-',
  verify_url: '-'
};

interface AchievementCardProps {
  id: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({id}) => {
  const { isDark, language } = useCommonContext();
  const { setCurrAchievement } = useAchievementContext();
  const { setCommentsMeta, onUnmount, setCallbacks } = useCommentsContext();
  const { likes, addLike, removeLike, token } = useUserContext();

  const [achievement, setAchievement] = useState<Achievement>(defaultAchievement);
  const [stats, setStats] = useState<AchievementStats|null>();
  const [liked, setLiked] = useState<boolean>(false);
  const [disableClap, setDisableClap] = useState<boolean>(false);
  const fetched = useRef<boolean>(false);

  useEffect(() => {
    if (fetched.current) return;
    if (!token) return;
    setLiked(likes.includes(id));
    axios.post(
      `${API_URL}/api/achievements/${id}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    ).then(({data}) => {
      setAchievement(data);
      axios.post(
        `${API_URL}/api/achievements/stats/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(({data: data1}) => {
        setStats(data1);
        fetched.current = true;
      });
    });
    return () => onUnmount!();
  }, [token]);

  const handleClick = useCallback(() => {
    setCurrAchievement!(achievement as Achievement);
  }, [achievement, setCurrAchievement]);

  const incCmt = () => {
    setStats(prev => ({
      comments: `${+(prev?.comments as string||0) + 1}`,
      appreciations: prev?.appreciations as string,
    }));
  };

  const decCmt = () => {
    setStats(prev => ({
      comments: `${+(prev?.comments as string||0) - 1}`,
      appreciations: prev?.appreciations as string,
    }));
  };

  const showComments = useCallback(() => {
    setCommentsMeta!("achievements", id+'||'+achievement?.title as string);
    setCallbacks!({incCmt, decCmt});
  },[id, achievement?.title, setCommentsMeta, setCallbacks]);

  const toggleLike = () => {
    if (disableClap) return;
    setDisableClap(true);
    if (!liked) {
      axios.put(
        `${API_URL}/api/achievements/like/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(() => {
        setStats(prev => ({
          appreciations: `${(+(prev?.appreciations as string||0))+1}`, 
          comments: prev?.comments as string
        }));
        addLike!(id);
        setLiked(true);
        setDisableClap(false);
      });
    } else {
      axios.put(
        `${API_URL}/api/achievements/dislike/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(() => {
        setStats(prev => ({
          appreciations: `${(+(prev?.appreciations as string||0))-1}`, 
          comments: prev?.comments as string
        }));
        removeLike!(id);
        setLiked(false);
        setDisableClap(false);
      });
    }
  };

  return (
    <Card>
      <Top>
        <Name>{achievement?.title}</Name>
        <HrzntlLn />
      </Top>
      <Description>{achievement?.description}</Description>
      <Footer>
        <Interactions>
          <div onClick={toggleLike}>
            <ClapIcon disabled={disableClap} liked={liked} dark={isDark} />
            <span>
              {stats?.appreciations !== "0" ? stats?.appreciations : ""}
            </span>
          </div>
          <div onClick={showComments}>
            <InteractionIcon dark={isDark} src={commentIcon} alt="comment" />
            <span>{stats?.comments !== "0" ? stats?.comments : ""}</span>
          </div>
        </Interactions>
        <CredBtn key={language} onClick={handleClick}>
          {transcriptPageTranslations.showCred[+language]}
        </CredBtn>
      </Footer>
    </Card>
  );
};

export default AchievementCard;
