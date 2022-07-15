import { createContext, ReactNode, useContext, useState } from 'react';

interface CommonContextInterface {
  loading: boolean;
  setLoading?: (val: boolean) => void;
}

const defaultState: CommonContextInterface = {
  loading: true,
};

export const CommonContext = createContext<CommonContextInterface>(defaultState);

export const useCommonContext = () => useContext(CommonContext);

export const CommonContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(defaultState.loading);
  return (
    <CommonContext.Provider value={{loading, setLoading}}>{children}</CommonContext.Provider>
  );
};
