import { useEffect, useState } from 'react';
import axios from 'axios';

import { Section, SectionTitle, SubSection, SectionItem } from './styles';
import { statsPageTranslations } from '../../utils/translations.util';

import { Stat, StatObject } from '../../data/stats.data';
import { useCommonContext } from '../../contexts/common.context';
import { useStatContext } from '../../contexts/stat.context';
import { useUserContext } from '../../contexts/user.context';

interface StatCardProps extends Stat {}

const StatCard: React.FC<StatCardProps> = ({name, url}) => {
  const { language } = useCommonContext();
  const { currYear } = useStatContext();
  const { token } = useUserContext();

  const [stats, setStats] = useState<StatObject>({});

  useEffect(() => {
    if (!token) return;
    axios.post(
      `${url}/${currYear}`, 
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    )
    .then(({data}) => setStats(data));
  }, [currYear, token]);

  return (
    <Section>
      <SectionTitle>{statsPageTranslations[name][+language]}</SectionTitle>
      <SubSection>
        {Object.keys(stats).map((stat) => {
          const propName: string = statsPageTranslations[stat][+language];
          const value: string = stats[stat];
          return (
            <SectionItem key={propName+value}>
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
