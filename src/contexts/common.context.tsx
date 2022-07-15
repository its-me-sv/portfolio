import { createContext, ReactNode, useContext, useState } from 'react';

interface CommonContextInterface {
  loading: boolean;
  language: string;
  setLoading?: (val: boolean) => void;
  setLanguage?: (val: string) => void;
}

const defaultState: CommonContextInterface = {
  loading: true,
  language: '0',
};

export const CommonContext = createContext<CommonContextInterface>(defaultState);

export const useCommonContext = () => useContext(CommonContext);

export const CommonContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(defaultState.loading);
  const [language, setLanguage] = useState<string>(defaultState.language);
  
  return (
    <CommonContext.Provider value={{
      loading, language,
      setLoading, setLanguage
    }}>{children}</CommonContext.Provider>
  );
};
