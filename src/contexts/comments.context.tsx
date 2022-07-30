import { dummyComments } from "../data/temp-comments.data";
import { createContext, ReactNode, useContext, useState, useCallback } from "react";

export interface Comment {
  id: string;
  timestamp: string;
  sender: string;
  message: string;
}

type CommentType = null | "Project" | "Achievement";

interface CommentsContextInterface {
  section: string;
  comment: string;
  comments: Array<Comment>;
  type: CommentType;
  page: null | string;
  setSection?: (val: string) => void;
  setComment?: (val: string) => void;
  setComments?: (val: Array<Comment>) => void;
  setType?: (val: CommentType) => void;
  postComment?: () => void;
  onUnmount?: () => void;
  setCommentsMeta?: (typ: CommentType, sctn: string) => void;
  fetchComments?: (apiEndPoint: string) => void;
}

const defaultState: CommentsContextInterface = {
  section: '',
  comment: '',
  comments: [],
  type: null,
  page: ''
};

export const CommentsContext = createContext<CommentsContextInterface>(defaultState);

export const useCommentsContext = () => useContext(CommentsContext);

export const CommentsContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [section, setSection] = useState<string>(defaultState.section);
  const [comment, setComment] = useState<string>(defaultState.comment);
  const [comments, setComments] = useState<Array<Comment>>(defaultState.comments);
  const [type, setType] = useState<CommentType>(defaultState.type);
  const [page, setPage] = useState<null|string>(defaultState.page);

  const postComment = useCallback(() => {
    if (comment.length < 1) return;
    window.alert(comment);
    setComment('');
  }, [comment]);

  const setCommentsMeta = useCallback((typ: CommentType, sctn: string) => {
    setType(typ);
    setSection(sctn);
  }, []);

  const fetchComments = useCallback((apiEndPoint: string) => {
    if (page === null) return;
    if (!apiEndPoint.length) return;
    setTimeout(() => {
      setComments(prev => [...prev, ...dummyComments]);
      setPage(Math.random() < 0.5 ? 'page1' : null);
    }, 1400);
  }, [page]);

  const onUnmount = useCallback(() => {
    setSection("");
    setComment("");
    setComments([]);
    setType(null);
    setPage('');
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        section, setSection,
        comment, setComment,
        comments, setComments,
        type, setType, page,
        postComment, onUnmount,
        setCommentsMeta,
        fetchComments
      }}
    >{children}</CommentsContext.Provider>
  );
};
