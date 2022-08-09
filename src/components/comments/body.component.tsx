import { useCallback } from 'react';
import { commentsTranslations } from "../../utils/translations.util";
import { Body, LoadMore } from "./styles";

import CommentCard from "./comment-card.component";
import { useCommonContext } from "../../contexts/common.context";
import { useCommentsContext } from '../../contexts/comments.context';

interface CommentBodyProps {}

const CommentBody: React.FC<CommentBodyProps> = () => {
  const { isDark, language } = useCommonContext();
  const { comments, fetchComments, page, scrollRef } = useCommentsContext();

  const onScroll = useCallback(() => {
    if (!scrollRef?.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef?.current;
    if (scrollTop + clientHeight >= scrollHeight) fetchComments!();
  }, [fetchComments, scrollRef]);

  return (
    <Body ref={scrollRef} onScroll={onScroll}>
      {comments.map(cmt => (
        <CommentCard key={cmt.id} {...cmt} />
      ))}
      {(comments.length > 0 && page !== null) && (
        <LoadMore 
          onClick={fetchComments}
          dark={isDark}
        >{commentsTranslations.ldCmt[+language]}</LoadMore>
      )}
    </Body>
  );
};

export default CommentBody;