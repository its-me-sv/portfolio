import {
  Card,
  CardTop,
  Description,
  Skills,
  Title,
  Time,
  Company
} from "./styles";

import { Experience } from "../../data/experiences.data";
import {miscTranslations} from "../../utils/translations.util";
import { useCommonContext } from "../../contexts/common.context";

interface ExpCardProps extends Experience {}

const ExpCard: React.FC<ExpCardProps> = ({
  title, time, company, type,
  description, skills
}) => {
  const { language, isDark } = useCommonContext();

  return (
    <Card>
      <CardTop dark={isDark}>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </CardTop>
      <Company>
        {company} | {type[+language]}
      </Company>
      <Description>{description[+language]}</Description>
      <Skills>{miscTranslations.skills[+language]}: {skills.join(", ")}</Skills>
    </Card>
  ); 
};

export default ExpCard;