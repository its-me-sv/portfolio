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
  setSection?: (val: string) => void;
  setComment?: (val: string) => void;
  setComments?: (val: Array<Comment>) => void;
  setType?: (val: CommentType) => void;
  postComment?: () => void;
  onUnmount?: () => void;
  setCommentsMeta?: (typ: CommentType, sctn: string) => void;
}

const defaultState: CommentsContextInterface = {
  section: '',
  comment: '',
  comments: [],
  type: null
};

export const CommentsContext = createContext<CommentsContextInterface>(defaultState);

export const useCommentsContext = () => useContext(CommentsContext);

export const CommentsContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [section, setSection] = useState<string>(defaultState.section);
  const [comment, setComment] = useState<string>(defaultState.comment);
  const [comments, setComments] = useState<Array<Comment>>(defaultState.comments);
  const [type, setType] = useState<CommentType>(defaultState.type);

  const postComment = useCallback(() => {
    if (comment.length < 1) return;
    window.alert(comment);
    setComment('');
  }, [comment]);

  const onUnmount = useCallback(() => {
    setSection('');
    setComment('');
    setComments([]);
    setType(null);
  }, []);

  const setCommentsMeta = useCallback((typ: CommentType, sctn: string) => {
    setType(typ);
    setSection(sctn);
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        section, setSection,
        comment, setComment,
        comments, setComments,
        type, setType,
        postComment, onUnmount,
        setCommentsMeta
      }}
    >{children}</CommentsContext.Provider>
  );
};
