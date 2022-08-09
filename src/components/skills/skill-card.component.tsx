import { Skill } from "../../data/skills.data";

import { Card, Name } from "./styles";

import { useCommonContext } from '../../contexts/common.context';

interface SkillCardProps extends Skill {}

const SkillCard: React.FC<SkillCardProps> = ({
  name, url
}) => {
  const { isDark } = useCommonContext();

  return (
    <Card dark={isDark}>
      <img src={url} alt={name + " logo"} />
      <Name>{name}</Name>
    </Card>
  );
};

export default SkillCard;
