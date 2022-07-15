import {Container, CreditText, SelectLang} from './styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <div></div>
      <CreditText>
        made with <span>❤</span> by
        <a href="https://github.com/its-me-sv" target="_blank" rel="noreferrer">
          Suraj Vijay
        </a>
      </CreditText>
      <SelectLang>
        <option>English</option>
        <option>Spanish</option>
        <option>German</option>
        <option>Japan</option>
        <option>Arabic</option>
      </SelectLang>
    </Container>
  );
};

export default Footer;
