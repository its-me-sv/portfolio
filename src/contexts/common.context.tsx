import { createContext, ReactNode, useContext, useState } from 'react';

interface CommonContextInterface {
  loading: boolean;
  language: string;
  menu: number;
  setLoading?: (val: boolean) => void;
  setLanguage?: (val: string) => void;
  setMenu?: (val: number) => void;
}

const defaultState: CommonContextInterface = {
  loading: true,
  language: '0',
  menu: 0,
};

export const CommonContext = createContext<CommonContextInterface>(defaultState);

export const useCommonContext = () => useContext(CommonContext);

export const CommonContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(defaultState.loading);
  const [language, setLanguage] = useState<string>(defaultState.language);
  const [menu, setMenu] = useState<number>(defaultState.menu);
  
  return (
    <CommonContext.Provider value={{
      loading, language, menu,
      setLoading, setLanguage, setMenu
    }}>{children}</CommonContext.Provider>
  );
};
