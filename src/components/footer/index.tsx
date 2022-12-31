import { ChangeEvent } from 'react';
import darkIcon from '../../assets/icons/dark.png';
import lightIcon from '../../assets/icons/light.png';

import { 
  Container, 
  CreditText, 
  SelectLang, 
  ThemeIcon, 
  Settings 
} from './styles';
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
      <Settings>
        <SelectLang value={language} onChange={handleChange}>
          {languages.map((val, idx) => (
            <option key={val} value={idx}>
              {val}
            </option>
          ))}
        </SelectLang>
        <ThemeIcon dark={isDark} onClick={toggleTheme!}>
          <img src={isDark ? lightIcon : darkIcon} alt="theme" />
        </ThemeIcon>
      </Settings>
      {!isMobile && (
        <CreditText open={menuOpen}>
          {footerTranslations.madeWidth[+language]} <span>❤</span>
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
      {!isMobile && <div />}
    </Container>
  );
};

export default Footer;
