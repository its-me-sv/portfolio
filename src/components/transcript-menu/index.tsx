import { transcriptMenuTranslations } from '../../utils/translations.util';
import { Container, MenuItem } from './styles';

import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';

interface TranscriptMenuProps {}

const TranscriptMenu: React.FC<TranscriptMenuProps> = () => {
  const { language, isDark } = useCommonContext();
  const { transMenu, setTransMenu } = useMenuContext();

  return (
    <Container key={language+(isDark+'')}>
      {Object.values(transcriptMenuTranslations).map((option, idx) => (
        <MenuItem 
          key={option[+language]}
          onClick={() => setTransMenu!(idx)}
          selected={idx === transMenu}
          dark={isDark}
        >{option[+language]}</MenuItem>
      ))}
    </Container>
  );
};

export default TranscriptMenu;
