import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Quote } from "../../data/quotes.data";
import { API_URL } from "../../utils/constants.util";

import { Card, HeartIcon } from './styles';

import { useCommonContext } from '../../contexts/common.context';
import { useUserContext } from "../../contexts/user.context";

interface QuoteCardProps extends Quote {}

const QuoteCard: React.FC<QuoteCardProps> = ({ content, id }) => {
  const { isDark } = useCommonContext();
  const { likes, addLike, removeLike, token } = useUserContext();
  
  const [liked, setLiked] = useState<boolean>(false);
  const [cnt, setCnt] = useState<number>(0);
  const [likeDisabled, setLikeDisabled] = useState<boolean>(false);
  const fetched = useRef<boolean>(false);

  useEffect(() => {
    if (fetched.current) return;
    if (!token) return;
    axios.post(
      `${API_URL}/api/quotes/likes/${id}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    ).then(({data}) => {
      setCnt(+data.likes);
      fetched.current = true;
    });
    setLiked(likes.includes("QUOTE"+id));
  }, [token]);

  const toggleLike = () => {
    if (likeDisabled) return;
    setLikeDisabled(true);
    if (!liked) {
      axios.put(
        `${API_URL}/api/quotes/like/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(() => {
        addLike!('QUOTE'+id);
        setLiked(true);
        setCnt(prev => prev + 1);
        setLikeDisabled(false);
      });
    } else {
      axios.put(
        `${API_URL}/api/quotes/dislike/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(() => {
        removeLike!('QUOTE'+id);
        setLiked(false);
        setCnt(prev => prev - 1);
        setLikeDisabled(false);
      });
    }
  };

  return (
    <Card>
      <span>{content}</span>
      <div onClick={toggleLike}>
        <HeartIcon disabled={likeDisabled} dark={isDark} liked={liked} />
        <span>{cnt > 0 ? cnt : ''}</span>
      </div>
    </Card>
  );
};

export default QuoteCard;
