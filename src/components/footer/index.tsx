import { ChangeEvent } from 'react';

import { Container, CreditText, SelectLang, FooterRight } from './styles';
import { footerTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';

const languages: Array<string> = [
  "English", "Español", "Deutsch",
  "日本", "عربي",
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const {language, setLanguage, toggleTheme, isDark, isMobile} = useCommonContext();
  const {menuOpen} = useMenuContext();
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
  setLanguage!(event.target.value);

  if (isMobile && !menuOpen) return <></>;

  return (
    <Container mobile={isMobile}>
      <div></div>
      <CreditText 
        key={language + `${isDark}`} 
        dark={isDark} 
        mobile={isMobile}
      >
        {footerTranslations.madeWidth[+language]} <span>❤</span>{" "}
        {footerTranslations.by[+language]}
        <a href="https://github.com/its-me-sv" target="_blank" rel="noreferrer">
          Suraj Vijay
        </a>
      </CreditText>
      <FooterRight>
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
      </FooterRight>
    </Container>
  );
};

export default Footer;
