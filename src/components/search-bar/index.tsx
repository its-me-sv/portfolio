import { CloseIcon, SearchContainer, SearchIcon, SearchInput } from './styles';
import { projectsTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const { isDark, language, isMobile } = useCommonContext();

  return (
    <SearchContainer
      dark={isDark}
      key={language + (isDark + "")}
      mobile={isMobile}
    >
      <SearchIcon dark={isDark} />
      <SearchInput
        dark={isDark}
        mobile={isMobile}
        placeholder={projectsTranslations.placeholder[+language]}
      />
      <CloseIcon dark={isDark} />
    </SearchContainer>
  );
};

export default SearchBar;
