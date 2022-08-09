import { useEffect, useRef } from 'react';

import { OverviewContainer, OverviewBox } from '../../utils/styles.util';

import CommentHeader from './header.component';
import CommentBody from './body.component';
import CommentFooter from './footer.component';
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = () => {
  const { fetchComments } = useCommentsContext();

  const fetched = useRef<boolean>(false);

  useEffect(() => {
    if (fetched.current) return;
    fetchComments!();
    fetched.current = true;
  }, []);

  return (
    <OverviewContainer>
      <OverviewBox comments>
        <CommentHeader />
        <CommentBody />
        <CommentFooter />
      </OverviewBox>
    </OverviewContainer>
  );
};

export default Comments;
