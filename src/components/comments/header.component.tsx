import { useCallback } from 'react';

import { CloseIcon, OverviewHeader } from '../../utils/styles.util';
import { CommentsTitle } from './styles';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentHeaderProps {}

const CommentHeader: React.FC<CommentHeaderProps> = () => {
  const { isDark } = useCommonContext();
  const { onUnmount, section } = useCommentsContext();

  const handleClose = useCallback(() => onUnmount!(), [onUnmount]);

  return (
    <OverviewHeader>
      <CommentsTitle dark={isDark}>{section.split('||')[1]}</CommentsTitle>
      <CloseIcon dark={isDark} onClick={handleClose} />
    </OverviewHeader>
  );
};

export default CommentHeader;
