import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {useCommonContext} from './common.context';

interface MenuContextInterface {
  menu: number;
  menuOpen: boolean;
  transMenu: number;
  setMenu?: (val: number) => void;
  setMenuOpen?: (val: boolean) => void;
  setTransMenu?: (val: number) => void;
}

const defaultState: MenuContextInterface = {
  menu: 0,
  menuOpen: false,
  transMenu: 0
};

const urls: Array<string> = [
  "",
  "about-me",
  "profiles",
  "transcript/certificates",
  "experiences",
  "projects",
  "achievements",
  "blogs",
  "quotes",
  "stats",
];

const transcriptUrls: Array<string> = [
  "certificates", "badges", "skills"
];

export const MenuContext = createContext<MenuContextInterface>(defaultState);

export const useMenuContext = () => useContext(MenuContext);

export const MenuContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate();
  const {language} = useCommonContext();

  const [menu, setMenuCode] = useState<number>(defaultState.menu);
  const [menuOpen, setMenuOpen] = useState<boolean>(defaultState.menuOpen);
  const [transMenu, setTransMenuCode] = useState<number>(defaultState.transMenu);

  useEffect(() => setMenuOpen(true), [language]);

  const setMenu = (val: number) => {
    if (val === menu) return;
    setMenuCode(val);
    navigate(`../${urls[val]}`);
  };

  const setTransMenu = (val: number) => {
    if (val === transMenu) return;
    setTransMenuCode(val);
    navigate(`../transcript/${transcriptUrls[val]}`);
  };
  
  return (
    <MenuContext.Provider value={{
      menu, menuOpen, transMenu,
      setMenu, setMenuOpen, setTransMenu
    }}>{children}</MenuContext.Provider>
  );
};
