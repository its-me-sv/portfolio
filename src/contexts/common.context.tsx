import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { toastTranslations } from '../utils/translations.util';

interface CommonContextInterface {
  loading: boolean;
  language: string;
  isDark: boolean;
  isMobile: boolean;
  setLoading?: (val: boolean) => void;
  setLanguage?: (val: string) => void;
  toggleTheme?: () => void;
}

// fetching state from local storage
const commonStoragePrefix: string = "suraj-portfolio:common";
const loadingState: string|null = localStorage.getItem(`${commonStoragePrefix}:loading`);
const languageState: string|null = localStorage.getItem(`${commonStoragePrefix}:language`);
const themeState: string|null = localStorage.getItem(`${commonStoragePrefix}:theme`);

const defaultState: CommonContextInterface = {
  loading: loadingState === null ? true : loadingState === "true",
  language: languageState === null ? "0" : languageState,
  isDark:
    themeState === null
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : themeState === "true",
  isMobile: window.innerWidth <= 768,
};

export const CommonContext = createContext<CommonContextInterface>(defaultState);

export const useCommonContext = () => useContext(CommonContext);

export const CommonContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(defaultState.loading);
  const [language, setLanguage] = useState<string>(defaultState.language);
  const [isDark, setIsDark] = useState<boolean>(defaultState.isDark);

  useEffect(() => {
    const themeHandler: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    themeHandler.addEventListener("change", e => setIsDark(e.matches));
    return () => themeHandler.removeEventListener("change", e => setIsDark(e.matches));
  }, []);

  // persisting state
  useEffect(() => {
    localStorage.setItem(`${commonStoragePrefix}:loading`, `${loading}`);
    localStorage.setItem(`${commonStoragePrefix}:language`, language);
    localStorage.setItem(`${commonStoragePrefix}:theme`, `${isDark}`);
  }, [loading, language, isDark]);

  const toggleTheme = useCallback(() => {
    toast.success(toastTranslations.thmTgl[+language]);
    setIsDark(prev => !prev);
  }, [language]);
  
  return (
    <CommonContext.Provider value={{
      loading, language, isDark, isMobile: window.innerWidth <= 768,
      setLoading, setLanguage, toggleTheme
    }}>{children}</CommonContext.Provider>
  );
};
