import { createContext, ReactNode, useContext, useState, useCallback, useRef, MutableRefObject } from "react";
import axios from "axios";

import { API_URL } from "../utils/constants.util";
import { useUserContext } from "./user.context";

export interface Comment {
  id: string;
  timestamp: string;
  sender: string;
  message: string;
}

export interface CommentCallbacks {
  incCmt: () => void;
  decCmt: () => void;
}

type CommentType = null | "projects" | "achievements";

interface CommentsContextInterface {
  section: string;
  comment: string;
  comments: Array<Comment>;
  type: CommentType;
  page: null | string;
  scrollRef?: MutableRefObject<HTMLDivElement>; 
  callbacks: CommentCallbacks;
  setSection?: (val: string) => void;
  setComment?: (val: string) => void;
  setComments?: (val: Array<Comment>) => void;
  setType?: (val: CommentType) => void;
  postComment?: () => void;
  onUnmount?: () => void;
  setCommentsMeta?: (typ: CommentType, sctn: string) => void;
  fetchComments?: () => void;
  setCallbacks?: (val: CommentCallbacks) => void;
}

const defaultState: CommentsContextInterface = {
  section: '',
  comment: '',
  comments: [],
  type: null,
  page: '',
  callbacks: {
    incCmt: () => {},
    decCmt: () => {}
  }
};

export const CommentsContext = createContext<CommentsContextInterface>(defaultState);

export const useCommentsContext = () => useContext(CommentsContext);

export const CommentsContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const { userId, socket } = useUserContext();

  const [section, setSection] = useState<string>(defaultState.section);
  const [comment, setComment] = useState<string>(defaultState.comment);
  const [comments, setComments] = useState<Array<Comment>>(defaultState.comments);
  const [type, setType] = useState<CommentType>(defaultState.type);
  const [page, setPage] = useState<null|string>(defaultState.page);
  const [callbacks, setCallbacks] = useState<CommentCallbacks>(defaultState.callbacks);
  const scrollRef = useRef() as MutableRefObject<HTMLDivElement>;

  const postComment = useCallback(() => {
    if (comment.length < 1) return;
    axios.post(`${API_URL}/api/${type}/comment/${section.split("||")[0]}`, {
      comment,
      sender: userId || socket.id
    }).then(({data}) => {
      setComments(prev => [data, ...prev]);
      setComment('');
      callbacks.incCmt();
      scrollRef.current.scrollTo({top:0, behavior: 'smooth'});
    });
  }, [comment, section, type, userId, callbacks, socket.id]);

  const setCommentsMeta = useCallback((typ: CommentType, sctn: string) => {
    setType(typ);
    setSection(sctn);
  }, []);

  const fetchComments = useCallback(()=> {
    if (page === null) return;
    axios.post(`${API_URL}/api/${type}/get-comments/${section.split('||')[0]}`, {
      page: page === '' ? null : page
    })
    .then(({data}) => {
      setComments(prev => [...prev, ...data.comments])
      setPage(data.page);
    });
  }, [page, section, type]);

  const onUnmount = useCallback(() => {
    setSection("");
    setComment("");
    setComments([]);
    setType(null);
    setPage('');
    setCallbacks({
      incCmt: () => {},
      decCmt: () => {},
    });
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        section, setSection,
        comment, setComment,
        comments, setComments,
        type, setType, 
        callbacks, setCallbacks,
        page, scrollRef,
        postComment, onUnmount,
        setCommentsMeta,
        fetchComments
      }}
    >{children}</CommentsContext.Provider>
  );
};
