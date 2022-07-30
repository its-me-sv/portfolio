import { Body } from "./styles";

import { useCommentsContext } from '../../contexts/comments.context';

const avtrURL: string = 'https://avatars.dicebear.com/api/identicon/';

interface CommentBodyProps {}

const CommentBody: React.FC<CommentBodyProps> = () => {
  const { comments } = useCommentsContext();

  return (
    <Body>
      {comments.map((cmt, idx) => (
        <div key={cmt.id+idx}>
          <img alt={cmt.sender} src={avtrURL+cmt.sender+'.svg'} />
          <div>
            <span>{new Date(cmt.timestamp).toDateString()}</span>
            <span>{cmt.message}</span>
          </div>
        </div>
      ))}
    </Body>
  );
};

export default CommentBody;