import { transcriptMenuTranslations } from '../../utils/translations.util';
import { MenuContainer, MenuItem } from '../../utils/styles.util';

import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';

interface TranscriptMenuProps {}

const TranscriptMenu: React.FC<TranscriptMenuProps> = () => {
  const { language, isDark } = useCommonContext();
  const { transMenu, setTransMenu } = useMenuContext();

  return (
    <MenuContainer key={language+(isDark+'')}>
      {Object.values(transcriptMenuTranslations).map((option, idx) => (
        <MenuItem 
          key={option[+language]}
          onClick={() => setTransMenu!(idx)}
          selected={idx === transMenu}
          dark={isDark}
        >{option[+language]}</MenuItem>
      ))}
    </MenuContainer>
  );
};

export default TranscriptMenu;
