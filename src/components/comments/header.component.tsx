import { useCallback } from 'react';

import { CloseIcon } from '../../utils/styles.util';
import { CommentsTitle } from './styles';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentHeaderProps {}

const CommentHeader: React.FC<CommentHeaderProps> = () => {
  const { isDark } = useCommonContext();
  const { setSection, section } = useCommentsContext();

  const handleClose = useCallback(() => setSection!(''), [setSection]);

  return (
    <>
      <CloseIcon dark={isDark} onClick={handleClose} />
      <CommentsTitle>{section}</CommentsTitle>
    </>
  );
};

export default CommentHeader;
