import { useEffect, useState } from 'react';
import axios from 'axios';

import { Section, SectionTitle, SubSection, SectionItem } from './styles';
import { statsPageTranslations } from '../../utils/translations.util';

import { Stat, StatObject } from '../../data/stats.data';
import { useCommonContext } from '../../contexts/common.context';
import { useStatContext } from '../../contexts/stat.context';

interface StatCardProps extends Stat {}

const StatCard: React.FC<StatCardProps> = ({name, url}) => {
  const { isDark, language } = useCommonContext();
  const { currYear } = useStatContext();

  const [stats, setStats] = useState<StatObject>({});

  useEffect(() => {
    axios.post(`${url}/${currYear}`)
    .then(({data}) => setStats(data));
  }, [url, currYear]);

  return (
    <Section dark={isDark}>
      <SectionTitle dark={isDark}>{statsPageTranslations[name][+language]}</SectionTitle>
      <SubSection>
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
