import { Container } from './styles';
import { stats } from '../../data/stats.data';

import StatCard from './stat-card.component';

interface StatsProps {}

const Stats: React.FC<StatsProps> = () => {
  return (
    <Container>
      {stats.map(prop => (
        <StatCard key={prop.name} {...prop} />
      ))}
    </Container>
  );
};

export default Stats;
