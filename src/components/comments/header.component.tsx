import { useCallback } from 'react';

import { CloseIcon } from '../../utils/styles.util';
import { CommentsTitle } from './styles';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentHeaderProps {}

const CommentHeader: React.FC<CommentHeaderProps> = () => {
  const { isDark } = useCommonContext();
  const { onUnmount, section } = useCommentsContext();

  const handleClose = useCallback(() => onUnmount!(), [onUnmount]);

  return (
    <>
      <CloseIcon dark={isDark} onClick={handleClose} />
      <CommentsTitle dark={isDark}>{section}</CommentsTitle>
    </>
  );
};

export default CommentHeader;
