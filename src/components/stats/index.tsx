import { Container } from './styles';
import { stats } from '../../data/stats.data';

import StatCard from './stat-card.component';
import { useCommonContext } from '../../contexts/common.context';

interface StatsProps {}

const Stats: React.FC<StatsProps> = () => {
  const { isMobile } = useCommonContext();

  return (
    <Container mobile={isMobile}>
      {stats.map(prop => (
        <StatCard key={prop.name} {...prop} />
      ))}
    </Container>
  );
};

export default Stats;
