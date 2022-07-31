import { useEffect } from "react";

import { Container } from './styles';

import BadgeCard from "./badge-card.component";
import { useMenuContext } from '../../contexts/menu.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface BadgesProps {}

const Badges: React.FC<BadgesProps> = () => {
  const { setTransMenu } = useMenuContext();
  const { badges } = useTranscriptContext();

  useEffect(() => setTransMenu!(1), []);

  return (
    <Container>
      {badges.map((badge, idx) => (
        <BadgeCard key={badge.url+(idx+'')} {...badge} />
      ))}
    </Container>
  );
};

export default Badges;
