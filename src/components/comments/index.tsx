import { OverviewContainer, OverviewBox } from '../../utils/styles.util';
import { Body } from './styles';

import CommentHeader from './header.component';
import CommentFooter from './footer.component';
import { useCommonContext } from '../../contexts/common.context';

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = () => {
  const { isDark, isMobile } = useCommonContext();

  return (
    <OverviewContainer dark={isDark}>
      <OverviewBox dark={isDark} mobile={isMobile} comments>
        <CommentHeader />
        <Body />
        <CommentFooter />
      </OverviewBox>
    </OverviewContainer>
  );
};

export default Comments;
