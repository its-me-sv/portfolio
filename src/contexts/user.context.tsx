import { createContext, ReactNode, useContext, useState } from "react";
import { Socket } from "socket.io-client";

interface UserContextInterface {
  userId: string;
  likes: Array<string>;
  socket: Socket|null;
}

const defaultState: UserContextInterface = {
  userId: '',
  likes: [],
  socket: null
};

export const UserContext = createContext<UserContextInterface>(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [userId, setUserId] = useState<string>(defaultState.userId);
  const [likes, setLikes] = useState<Array<string>>(defaultState.likes);
  const [socket, setSocket] = useState<Socket|null>(defaultState.socket);

  return (
    <UserContext.Provider value={{
      userId, likes, socket
    }}>{children}</UserContext.Provider>
  );
};
