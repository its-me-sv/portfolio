import { createContext, ReactNode, useContext, useState } from 'react';

interface CommonContextInterface {
  loading: boolean;
  language: string;
  isDark: boolean;
  isMobile: boolean;
  setLoading?: (val: boolean) => void;
  setLanguage?: (val: string) => void;
  toggleTheme?: () => void;
}

const defaultState: CommonContextInterface = {
  loading: true,
  language: '0',
  isDark: false,
  isMobile: window.innerWidth <= 768
};

export const CommonContext = createContext<CommonContextInterface>(defaultState);

export const useCommonContext = () => useContext(CommonContext);

export const CommonContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(defaultState.loading);
  const [language, setLanguage] = useState<string>(defaultState.language);
  const [isDark, setIsDark] = useState<boolean>(defaultState.isDark);

  const toggleTheme = () => setIsDark(!isDark);
  
  return (
    <CommonContext.Provider value={{
      loading, language, isDark, isMobile: window.innerWidth <= 768,
      setLoading, setLanguage, toggleTheme
    }}>{children}</CommonContext.Provider>
  );
};
