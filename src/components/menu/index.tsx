import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/close.png";
import { Container, MenuIcon, MenuItem } from './styles';
import { menuTranslations } from '../../utils/translations.util';

import Footer from '../footer';

import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from "../../contexts/common.context";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { menu, menuOpen, setMenuOpen, setMenu } = useMenuContext();
  const { language, isDark, isMobile } = useCommonContext();

  const toggleMenu = () => setMenuOpen!(!menuOpen);

  return (
    <Container open={menuOpen}>
      <MenuIcon
        onClick={toggleMenu}
        src={menuOpen ? closeIcon : menuIcon}
        dark={isDark}
        open={menuOpen}
      />
      {menuOpen &&
        Object.values(menuTranslations).map((page, idx) => (
          <MenuItem
            key={page[+language]}
            chosen={idx === menu}
            onClick={() => setMenu!(idx)}
          >
            {page[+language]}
          </MenuItem>
        ))}
      {isMobile && <Footer />}
    </Container>
  );
};

export default Menu;
