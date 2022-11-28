import {Container} from './styles';

import {experiences} from "../../data/experiences.data";
import ExpCard from './exp-card';

interface ExperiencesProps {}

const Experiences: React.FC<ExperiencesProps> = () => {
  return (
    <Container>
      {experiences.map(exp => (
        <ExpCard key={exp.time} {...exp}/>
      ))}
    </Container>
  ); 
};

export default Experiences;