import { Card, BinIcon } from "./styles";
import { commentsTranslations } from "../../utils/translations.util";

import { Comment, useCommentsContext } from "../../contexts/comments.context";
import { useCommonContext } from "../../contexts/common.context";
import { useUserContext } from "../../contexts/user.context";

const avtrURL: string = "https://avatars.dicebear.com/api/identicon/";

interface CommentCardProps extends Comment {}

const CommentCard: React.FC<CommentCardProps> = ({
  sender, timestamp, message, id
}) => {
  const { isDark, language } = useCommonContext();
  const { removeComment } = useCommentsContext();
  const { userId, socket } = useUserContext();

  const date = new Date(timestamp);

  const onDelete = () => {
    const confirmed = window.confirm(`${commentsTranslations.delCmt[+language]} ?`);
    if (confirmed) removeComment!(id);
  };

  return (
    <Card dark={isDark}>
      <img alt={sender} src={avtrURL + sender + ".svg"} />
      <div>
        <span>{date.toLocaleTimeString()}, {date.toDateString()}</span>
        <span>{message}</span>
      </div>
      {(sender === (userId || socket.id)) &&
      <BinIcon dark={isDark} onClick={onDelete}>🗑️</BinIcon>}
    </Card>
  );
};

export default CommentCard;
