import { useCallback } from 'react';

import { CredBtn } from '../../utils/styles.util';
import { Footer } from './styles';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentFooterProps {}

const CommentFooter: React.FC<CommentFooterProps> = () => {
  const { isDark } = useCommonContext();
  const { comment, setComment, postComment } = useCommentsContext();

  const handleCommentChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    event => {
      setComment!(event?.target.value);
  }, [setComment]);

  return (
    <Footer>
      <textarea 
        rows={2} 
        placeholder="Comment ...." 
        value={comment}
        onChange={handleCommentChange}
      />
      <CredBtn 
        dark={isDark} 
        onClick={postComment}
        disabled={comment.length < 1}
      >Post comment</CredBtn>
    </Footer>
  );
};

export default CommentFooter;
