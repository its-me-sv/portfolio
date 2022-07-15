import {Container, Signature, CurrentPage, MenuIcon} from './styles';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <Signature>Suraj Vijay</Signature>
      <CurrentPage>Page Name</CurrentPage>
      <MenuIcon />
    </Container>
  );
};

export default Header;
