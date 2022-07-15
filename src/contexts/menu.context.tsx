import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {useCommonContext} from './common.context';

interface MenuContextInterface {
  menu: number;
  menuOpen: boolean;
  setMenu?: (val: number) => void;
  setMenuOpen?: (val: boolean) => void;
}

const defaultState: MenuContextInterface = {
  menu: 0,
  menuOpen: false
};

const urls: Array<string> = [
  "", "about-me", "profiles",
  "transcript", "projects",
  "achievements", "blogs",
  "quotes", "stats"
];

export const MenuContext = createContext<MenuContextInterface>(defaultState);

export const useMenuContext = () => useContext(MenuContext);

export const MenuContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate();
  const {language} = useCommonContext();

  const [menu, setMenuCode] = useState<number>(defaultState.menu);
  const [menuOpen, setMenuOpen] = useState<boolean>(defaultState.menuOpen);

  useEffect(() => setMenuOpen(true), [language]);

  const setMenu = (val: number) => {
    if (val === menu) return;
    setMenuCode(val);
    navigate(`../${urls[val]}`);
  };
  
  return (
    <MenuContext.Provider value={{
      menu, menuOpen,
      setMenu, setMenuOpen
    }}>{children}</MenuContext.Provider>
  );
};
