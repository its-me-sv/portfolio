import { Skill } from "../../utils/skills-data.util";

import { Card, Name } from "./styles";

import { useCommonContext } from '../../contexts/common.context';

interface SkillCardProps extends Skill {}

const SkillCard: React.FC<SkillCardProps> = ({
  name, url
}) => {
  const { isDark, isMobile } = useCommonContext();

  return (
    <Card dark={isDark} mobile={isMobile}>
      <img src={url} alt={name + " logo"} />
      <Name dark={isDark}>{name}</Name>
    </Card>
  );
};

export default SkillCard;
