import { MenuContainer, MenuItem } from "../../utils/styles.util";

import { useCommonContext } from "../../contexts/common.context";
import { useStatContext } from '../../contexts/stat.context';

interface StatMenuProps {}

const StatMenu: React.FC<StatMenuProps> = () => {
  const { isDark } = useCommonContext();
  const { years, setCurrYear, currYear } = useStatContext();

  return (
    <MenuContainer>
      {years.map(option => (
        <MenuItem 
          key={option}
          onClick={() => setCurrYear!(option)}
          selected={option === currYear}
          dark={isDark}
        >{option}</MenuItem>
      ))}
    </MenuContainer>
  );
};

export default StatMenu;
