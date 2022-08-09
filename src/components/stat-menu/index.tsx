import { MenuContainer, MenuItem } from "../../utils/styles.util";

import { useStatContext } from '../../contexts/stat.context';

interface StatMenuProps {}

const StatMenu: React.FC<StatMenuProps> = () => {
  const { years, setCurrYear, currYear } = useStatContext();

  return (
    <MenuContainer>
      {years.map(option => (
        <MenuItem 
          key={option}
          onClick={() => setCurrYear!(option)}
          selected={option === currYear}
        >{option}</MenuItem>
      ))}
    </MenuContainer>
  );
};

export default StatMenu;
