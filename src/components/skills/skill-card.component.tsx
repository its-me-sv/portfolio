import { Skill } from "../../data/skills.data";

import { Card, Name } from "./styles";

interface SkillCardProps extends Skill {}

const SkillCard: React.FC<SkillCardProps> = ({
  name, url
}) => {
  return (
    <Card>
      <img src={url} alt={name + " logo"} />
      <Name>{name}</Name>
    </Card>
  );
};

export default SkillCard;
