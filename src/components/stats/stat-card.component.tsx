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
    setTimeout(() => setStats(statsTempData[url]), 1400);
  }, []);

  return (
    <Section dark={isDark}>
      <SectionTitle dark={isDark}>{name}</SectionTitle>
      <SubSection mobile={isMobile}>
        {Object.keys(stats).map((stat) => (
          <SectionItem dark={isDark} key={language+(stats[stat]+'')}>
            <span>{statsPageTranslations[stat][+language]}</span>
            <span>{stats[stat]}</span>
          </SectionItem>
        ))}
      </SubSection>
    </Section>
  );
};

export default StatCard;
