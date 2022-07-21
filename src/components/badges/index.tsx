import { useEffect } from "react";

import { Container } from './styles';

import BadgeCard from "./badge-card.component";
import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface BadgesProps {}

const Badges: React.FC<BadgesProps> = () => {
  const { isMobile } = useCommonContext();
  const { setTransMenu } = useMenuContext();
  const { badges } = useTranscriptContext();

  useEffect(() => setTransMenu!(1), []);

  return (
    <Container mobile={isMobile}>
      {badges.map(badge => (
        <BadgeCard key={badge.url} {...badge} />
      ))}
    </Container>
  );
};

export default Badges;
