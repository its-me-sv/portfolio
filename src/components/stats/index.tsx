import { Container, Section, SectionItem, SectionTitle, SubSection } from './styles';

import { useCommonContext } from '../../contexts/common.context';

interface StatsProps {}

const Stats: React.FC<StatsProps> = () => {
  const { isDark } = useCommonContext();

  return (
    <Container>
      <Section dark={isDark}>
        <SectionTitle dark={isDark}>General</SectionTitle>
        <SubSection>
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
      <Section dark={isDark}>
        <SectionTitle dark={isDark}>User</SectionTitle>
        <SubSection>
          <SectionItem dark={isDark}>
            <span>Total users</span>
            <span>32.6k</span>
          </SectionItem>
          <SectionItem dark={isDark}>
            <span>Currently active</span>
            <span>2.6k</span>
          </SectionItem>
          <SectionItem dark={isDark}>
            <span>Avg. new users per day</span>
            <span>20</span>
          </SectionItem>
        </SubSection>
      </Section>
      <Section dark={isDark}>
        <SectionTitle dark={isDark}>Interactions</SectionTitle>
        <SubSection>
          <SectionItem dark={isDark}>
            <span>Likes</span>
            <span>32.6k</span>
          </SectionItem>
          <SectionItem dark={isDark}>
            <span>Comments</span>
            <span>2.6k</span>
          </SectionItem>
          <SectionItem dark={isDark}>
            <span>Shares</span>
            <span>20</span>
          </SectionItem>
          <SectionItem dark={isDark}>
            <span>Code visits</span>
            <span>12m</span>
          </SectionItem>
          <SectionItem dark={isDark}>
            <span>Project launches</span>
            <span>12m</span>
          </SectionItem>
          <SectionItem dark={isDark}>
            <span>Appreciations</span>
            <span>12m</span>
          </SectionItem>
        </SubSection>
      </Section>
    </Container>
  );
};

export default Stats;
