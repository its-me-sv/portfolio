import { useCallback } from 'react';

import { CredBtn } from '../../utils/styles.util';
import { Footer } from './styles';
import { commentsTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentFooterProps {}

const CommentFooter: React.FC<CommentFooterProps> = () => {
  const { isDark, language } = useCommonContext();
  const { comment, setComment, postComment } = useCommentsContext();

  const handleCommentChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    event => {
      setComment!(event?.target.value);
  }, [setComment]);

  return (
    <Footer dark={isDark}>
      <textarea 
        rows={2} 
        placeholder={commentsTranslations.cmt[+language]} 
        value={comment}
        onChange={handleCommentChange}
      />
      <CredBtn 
        dark={isDark} 
        onClick={postComment}
        disabled={comment.length < 1}
      >{commentsTranslations.pstCmt[+language]}</CredBtn>
    </Footer>
  );
};

export default CommentFooter;
