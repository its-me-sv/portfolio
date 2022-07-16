import { menuTranslations } from '../../utils/translations.util';
import { Container, Signature, CurrentPage } from './styles';

import Menu from '../menu';

import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const {language, isDark} = useCommonContext();
  const {menu} = useMenuContext();

  const pageName: string = Object.values(menuTranslations)[menu][+language];

  return (
    <Container>
      <Signature key={isDark + ""} dark={isDark}>
        Suraj Vijay
      </Signature>
      <CurrentPage key={pageName + `${isDark}`} dark={isDark}>
        {pageName}
      </CurrentPage>
      <div />
      <Menu />
    </Container>
  );
};

export default Header;
