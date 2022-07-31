import { useEffect } from 'react';

import { OverviewContainer, OverviewBox } from '../../utils/styles.util';

import CommentHeader from './header.component';
import CommentBody from './body.component';
import CommentFooter from './footer.component';
import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = () => {
  const { isDark } = useCommonContext();
  const { fetchComments } = useCommentsContext();

  useEffect(() => {
    fetchComments!();
  }, []);

  return (
    <OverviewContainer dark={isDark}>
      <OverviewBox dark={isDark} comments>
        <CommentHeader />
        <CommentBody />
        <CommentFooter />
      </OverviewBox>
    </OverviewContainer>
  );
};

export default Comments;
