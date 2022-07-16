import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/close.png";
import { Container, MenuIcon, MenuItem } from './styles';
import {menuTranslations} from '../../utils/translations.util';

import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from "../../contexts/common.context";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { menu, menuOpen, setMenuOpen, setMenu } = useMenuContext();
  const { language, isDark } = useCommonContext();

  const toggleMenu = () => setMenuOpen!(!menuOpen);

  return (
    <Container>
      <MenuIcon
        key={menuOpen + "" + (isDark + "")}
        onClick={toggleMenu}
        src={menuOpen ? closeIcon : menuIcon}
        dark={isDark}
      />
      {menuOpen &&
        Object.values(menuTranslations).map((page, idx) => (
          <MenuItem
            key={page[+language] + (isDark + "")}
            chosen={idx === menu}
            onClick={() => setMenu!(idx)}
            dark={isDark}
          >
            {page[+language]}
          </MenuItem>
        ))}
    </Container>
  );
};

export default Menu;
