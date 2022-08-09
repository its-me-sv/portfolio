import { useEffect, useState } from "react";
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

  useEffect(() => {
    axios.post(
      `${API_URL}/api/quotes/likes/${id}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    ).then(({data}) => setCnt(+data.likes));
    setLiked(likes.includes("QUOTE"+id));
  }, [id, token]);

  const toggleLike = () => {
    if (!liked) {
      axios.put(
        `${API_URL}/api/quotes/like/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(() => {
        addLike!('QUOTE'+id);
        setLiked(true);
        setCnt(prev => prev + 1);
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
      });
    }
  };

  return (
    <Card>
      <span>{content}</span>
      <div onClick={toggleLike}>
        <HeartIcon dark={isDark} liked={liked} />
        <span>{cnt > 0 ? cnt : ''}</span>
      </div>
    </Card>
  );
};

export default QuoteCard;
