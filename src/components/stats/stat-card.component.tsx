import { Section, SectionTitle, SubSection, SectionItem } from './styles';

import { Stat } from '../../data/temp-stats.data';
import { useCommonContext } from '../../contexts/common.context';

interface StatCardProps extends Stat {}

const StatCard: React.FC<StatCardProps> = ({name}) => {
  const { isDark, isMobile } = useCommonContext();

  return (
    <Section dark={isDark}>
      <SectionTitle dark={isDark}>{name}</SectionTitle>
      <SubSection mobile={isMobile}>
        <SectionItem dark={isDark}>
          <span>Total views</span>
          <span>32.6k</span>
        </SectionItem>
        <SectionItem dark={isDark}>
          <span>Avg. views per day</span>
          <span>2.6k</span>
        </SectionItem>
        <SectionItem dark={isDark}>
          <span>Total session time</span>
          <span>4d 12h</span>
        </SectionItem>
        <SectionItem dark={isDark}>
          <span>Avg. session time</span>
          <span>12m</span>
        </SectionItem>
        <SectionItem dark={isDark}>
          <span>Last view</span>
          <span>1m ago</span>
        </SectionItem>
        <SectionItem dark={isDark}>
          <span>Prime time</span>
          <span>4pm</span>
        </SectionItem>
      </SubSection>
    </Section>
  );
};

export default StatCard;
