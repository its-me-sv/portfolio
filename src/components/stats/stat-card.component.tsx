import { useEffect, useState } from 'react';
import { Section, SectionTitle, SubSection, SectionItem } from './styles';
import { statsTempData } from './temp-data';
import { statsPageTranslations } from '../../utils/translations.util';

import { Stat, StatObject } from '../../data/stats.data';
import { useCommonContext } from '../../contexts/common.context';

interface StatCardProps extends Stat {}

const StatCard: React.FC<StatCardProps> = ({name, url}) => {
  const { isDark, isMobile, language } = useCommonContext();

  const [stats, setStats] = useState<StatObject>({});

  useEffect(() => {
    const timer = setTimeout(() => setStats(statsTempData[url]), 1400);
    return () => clearTimeout(timer);
  }, [url]);

  return (
    <Section dark={isDark}>
      <SectionTitle dark={isDark}>{statsPageTranslations[name][+language]}</SectionTitle>
      <SubSection mobile={isMobile}>
        {Object.keys(stats).map((stat) => {
          const propName: string = statsPageTranslations[stat][+language];
          const value: string = stats[stat];
          return (
            <SectionItem dark={isDark} key={propName+value}>
              <span>{propName}</span>
              <span>{value}</span>
            </SectionItem>
          );
        })}
      </SubSection>
    </Section>
  );
};

export default StatCard;
