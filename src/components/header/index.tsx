import { useNavigate } from 'react-router-dom';

import { menuTranslations } from '../../utils/translations.util';
import { Container, Signature, CurrentPage } from './styles';

import Menu from '../menu';

import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const { language, isMobile } = useCommonContext();
  const { menu } = useMenuContext();

  const pageName: string = Object.values(menuTranslations)[menu][+language];

  return (
    <Container>
      {!isMobile && (
        <Signature onClick={() => navigate('../')}>
          Suraj Vijayan
        </Signature>
      )}
      <CurrentPage key={pageName}>
        {pageName}
      </CurrentPage>
      <div />
      <Menu />
    </Container>
  );
};

export default Header;
