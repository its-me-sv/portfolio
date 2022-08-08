import { Comment } from "../../contexts/comments.context";
import { useCommonContext } from "../../contexts/common.context";
import { useUserContext } from "../../contexts/user.context";
import { Card, BinIcon } from "./styles";

const avtrURL: string = "https://avatars.dicebear.com/api/identicon/";

interface CommentCardProps extends Comment {}

const CommentCard: React.FC<CommentCardProps> = ({
  sender, timestamp, message
}) => {
  const { isDark } = useCommonContext();
  const { userId, socket } = useUserContext();

  const date = new Date(timestamp);

  return (
    <Card dark={isDark}>
      <img alt={sender} src={avtrURL + sender + ".svg"} />
      <div>
        <span>{date.toLocaleTimeString()}, {date.toDateString()}</span>
        <span>{message}</span>
      </div>
      {(sender === (userId || socket.id)) &&
      <BinIcon dark={isDark}>🗑️</BinIcon>}
    </Card>
  );
};

export default CommentCard;
