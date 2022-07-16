import { ChangeEvent } from 'react';

import { Container, CreditText, SelectLang } from './styles';
import { footerTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';

const languages: Array<string> = [
  "English", "Español", "Deutsch",
  "日本", "عربي",
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const {language, setLanguage, toggleTheme, isDark} = useCommonContext();
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
  setLanguage!(event.target.value);

  return (
    <Container>
      <div></div>
      <CreditText key={language + `${isDark}`} dark={isDark}>
        {footerTranslations.madeWidth[+language]} <span>❤</span>{" "}
        {footerTranslations.by[+language]}
        <a href="https://github.com/its-me-sv" target="_blank" rel="noreferrer">
          Suraj Vijay
        </a>
      </CreditText>
      <div>
        <span onClick={toggleTheme!}>{isDark ? "🌜" : "🌞"}</span>
        <SelectLang
          value={language}
          onChange={handleChange}
          key={language + `${isDark}`}
          dark={isDark}
        >
          {languages.map((val, idx) => (
            <option key={val} value={idx}>
              {val}
            </option>
          ))}
        </SelectLang>
      </div>
    </Container>
  );
};

export default Footer;
