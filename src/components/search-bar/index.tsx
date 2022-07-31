import { useCallback } from 'react';
import { CloseIcon, SearchContainer, SearchIcon, SearchInput } from './styles';
import { projectsPageTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';
import { useProjectContext } from '../../contexts/project.context';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const { isDark, language } = useCommonContext();
  const { searchField, setSearchField } = useProjectContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(event =>
    setSearchField!(event.target.value), []);

  const clearText = useCallback(() => setSearchField!(''), []);

  return (
    <SearchContainer dark={isDark}>
      <SearchIcon dark={isDark} />
      <SearchInput
        dark={isDark}
        placeholder={projectsPageTranslations.placeholder[+language]}
        value={searchField}
        onChange={handleChange}
      />
      <CloseIcon dark={isDark} onClick={clearText} />
    </SearchContainer>
  );
};

export default SearchBar;
