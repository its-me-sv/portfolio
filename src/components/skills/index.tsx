import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";


interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const { setTransMenu } = useMenuContext();
  
  useEffect(() => setTransMenu!(2), []);

  return <div>Skills</div>;
};

export default Skills;
