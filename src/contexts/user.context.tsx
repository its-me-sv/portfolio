import axios from "axios";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";

import { API_URL } from "../utils/constants.util";

interface UserContextInterface {
  userId: string;
  likes: Array<string>;
  token: string;
  addLike?: (val: string) => void;
  removeLike?: (val: string) => void;
}

const defaultState: UserContextInterface = {
  userId: '',
  likes: [],
  token: ''
};

let first = true;

export const UserContext = createContext<UserContextInterface>(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const userId = useRef<string>(defaultState.userId);
  const [likes, setLikes] = useState<Array<string>>(defaultState.likes);
  const [token, setToken] = useState<string>(defaultState.token);

  useEffect(() => {
    if (!first) return;
    axios.get(`${API_URL}/api/auth/register`)
    .then(({data}) => {
      userId.current = data.id;
      setToken(data.token);
    });
    first = false;
  }, []);

  const onTabClose = () => {
    axios.delete(
      `${API_URL}/api/auth/unregister`, 
      {data: {userId: userId.current }}
    );
  };

  useEffect(() => {
    window.addEventListener("unload", onTabClose);
    return () => {
      window.removeEventListener("unload", onTabClose);
    }
  }, []);

  const addLike = useCallback((likeId: string) => {
    setLikes(prev => [...prev, likeId]);
  }, []);

  const removeLike = useCallback((likeId: string) => {
    setLikes(prev => prev.filter(val => val !== likeId));
  }, []);

  return (
    <UserContext.Provider value={{
      userId: userId.current, 
      token: token,
      likes, addLike, removeLike
    }}>{children}</UserContext.Provider>
  );
};
