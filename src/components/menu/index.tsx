import { useState } from 'react';

import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/close.png";
import { Container, MenuIcon, MenuItem } from './styles';

import {useCommonContext} from '../../contexts/common.context';

interface MenuProps {}

const pages: Array<string> = [
  "home", "about me", "profiles",
  "transcript", "projects",
  "achievements", "blogs", 
  "quotes", "stats"
];

const Menu: React.FC<MenuProps> = () => {
  const {menu} = useCommonContext();
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Container>
      <MenuIcon onClick={toggleMenu} src={menuOpen ? closeIcon : menuIcon} />
      {menuOpen && pages.map((page, idx) => (
        <MenuItem key={page} chosen={idx === menu}>{page}</MenuItem>
      ))}
    </Container>
  );
};

export default Menu;
