import { useCallback } from 'react';
import { CloseIcon, SearchContainer, SearchIcon, SearchInput } from './styles';
import { projectsPageTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';

interface SearchBarProps {
  searchField: string;
  setSearchField: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ searchField, setSearchField }) => {
  const { isDark, language } = useCommonContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(event =>
    setSearchField!(event.target.value), []);

  const clearText = useCallback(() => setSearchField!(''), []);

  return (
    <SearchContainer>
      <SearchIcon dark={isDark} />
      <SearchInput
        placeholder={projectsPageTranslations.placeholder[+language]}
        value={searchField}
        onChange={handleChange}
      />
      {
        searchField.length > 0 
        && <CloseIcon dark={isDark} onClick={clearText} />
      }
    </SearchContainer>
  );
};

export default SearchBar;
