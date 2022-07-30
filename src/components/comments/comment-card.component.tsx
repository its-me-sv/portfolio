import { Comment } from "../../contexts/comments.context";
import { useCommonContext } from "../../contexts/common.context";
import { Card } from "./styles";

const avtrURL: string = "https://avatars.dicebear.com/api/identicon/";

interface CommentCardProps extends Comment {}

const CommentCard: React.FC<CommentCardProps> = ({
  sender, timestamp, message
}) => {
  const { isDark } = useCommonContext();

  const date = new Date(+timestamp);

  return (
    <Card dark={isDark}>
      <img alt={sender} src={avtrURL + sender + ".svg"} />
      <div>
        <span>{date.toLocaleTimeString()}, {date.toDateString()}</span>
        <span>{message}</span>
      </div>
    </Card>
  );
};

export default CommentCard;
