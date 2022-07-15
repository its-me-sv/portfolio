import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/close.png";
import { Container, MenuIcon, MenuItem } from './styles';
import {menuTranslations} from '../../utils/translations';

import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from "../../contexts/common.context";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { menu, menuOpen, setMenuOpen, setMenu } = useMenuContext();
  const { language } = useCommonContext();

  const toggleMenu = () => setMenuOpen!(!menuOpen);

  return (
    <Container>
      <MenuIcon onClick={toggleMenu} src={menuOpen ? closeIcon : menuIcon} />
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
    </Container>
  );
};

export default Menu;
