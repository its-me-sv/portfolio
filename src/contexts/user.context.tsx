import axios from "axios";
import { 
  createContext, ReactNode, 
  useCallback, useContext, 
  useEffect, useRef, useState 
} from "react";
import { io, Socket } from "socket.io-client";

import { API_URL } from "../utils/constants.util";

interface UserContextInterface {
  userId: string;
  likes: Array<string>;
  socket: Socket;
  token: string;
  addLike?: (val: string) => void;
  removeLike?: (val: string) => void;
}

const defaultState: UserContextInterface = {
  userId: "",
  likes: [],
  socket: io(API_URL),
  token: "",
};

let first = true;

export const UserContext = createContext<UserContextInterface>(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const userId = useRef<string>(defaultState.userId);
  const [likes, setLikes] = useState<Array<string>>(defaultState.likes);
  const socket = useRef<Socket>(defaultState.socket);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    if (!first) return;
    socket.current.on("registered", (data) => {
      socket.current.id = data.id;
      userId.current = data.id;
      setToken(data.token);
    });
    first = false;
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
      socket: socket.current, 
      token: token,
      likes, addLike, removeLike
    }}>{children}</UserContext.Provider>
  );
};
