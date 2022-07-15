import {Container, Signature, CurrentPage} from './styles';

import Menu from '../menu';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <Signature>Suraj Vijay</Signature>
      <CurrentPage>Page Name</CurrentPage>
      <div />
      <Menu />
    </Container>
  );
};

export default Header;
