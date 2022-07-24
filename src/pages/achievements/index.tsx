import { useEffect } from "react";

import { Container } from './styles';

import { useMenuContext } from "../../contexts/menu.context";

interface AchievementsPageProps {}

const AchievementsPage: React.FC<AchievementsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(5), []);
  
  return (
    <Container>
      
    </Container>
  );
};

export default AchievementsPage;
