import { createContext, ReactNode, useContext, useState } from "react";

interface CommentsContextInterface {
  section: string;
  comment: string;
  setSection?: (val: string) => void;
  setComment?: (val: string) => void;
  postComment?: () => void;
  onUnmount?: () => void;
}

const defaultState: CommentsContextInterface = {
  section: '',
  comment: '',
};

export const CommentsContext = createContext<CommentsContextInterface>(defaultState);

export const useCommentsContext = () => useContext(CommentsContext);

export const CommentsContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [section, setSection] = useState<string>(defaultState.section);
  const [comment, setComment] = useState<string>(defaultState.comment);

  const postComment = () => {
    if (comment.length < 1) return;
    window.alert(comment);
    setComment('');
  };

  const onUnmount = () => {
    setSection('');
    setComment('');
  };

  return (
    <CommentsContext.Provider
      value={{
        section, setSection,
        comment, setComment,
        postComment, onUnmount
      }}
    >{children}</CommentsContext.Provider>
  );
};
