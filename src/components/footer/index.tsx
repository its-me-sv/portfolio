import { ChangeEvent } from 'react';
import darkIcon from '../../assets/icons/dark.png';
import lightIcon from '../../assets/icons/light.png';

import { Container, CreditText, SelectLang, ThemeIcon } from './styles';
import { footerTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';

const languages: Array<string> = [
  "English", "Español", "Deutsch",
  "日本", "عربي",
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { language, setLanguage, toggleTheme, isDark, isMobile } = useCommonContext();
  const { menuOpen } = useMenuContext();
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
  setLanguage!(event.target.value);

  if (isMobile && !menuOpen) return <></>;

  return (
    <Container>
      <SelectLang value={language} onChange={handleChange}>
        {languages.map((val, idx) => (
          <option key={val} value={idx}>
            {val}
          </option>
        ))}
      </SelectLang>
      {!isMobile && (
        <CreditText open={menuOpen}>
          {footerTranslations.madeWidth[+language]} <span>❤</span>{" "}
          {footerTranslations.by[+language]}
          <a
            href="https://github.com/its-me-sv"
            target="_blank"
            rel="noreferrer"
          >
            Suraj Vijayan
          </a>
        </CreditText>
      )}
      <ThemeIcon dark={isDark} onClick={toggleTheme!}>
        <img src={isDark ? lightIcon : darkIcon} alt="theme" />
      </ThemeIcon>
    </Container>
  );
};

export default Footer;
