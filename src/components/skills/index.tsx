import { useEffect } from "react";

import { Container } from './styles';

import SkillCard from "./skill-card.component";
import { useMenuContext } from "../../contexts/menu.context";
import { useTranscriptContext } from '../../contexts/transcript.context';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const { setTransMenu } = useMenuContext();
  const { skills } = useTranscriptContext();
  
  useEffect(() => setTransMenu!(2), []);

  return (
    <Container>
      {skills.map(skill => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </Container>
  );
};

export default Skills;
