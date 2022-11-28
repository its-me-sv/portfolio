import { useEffect } from "react";

import { PageContainer } from "../../utils/styles.util";

import StatMenu from "../../components/stat-menu";
import Stats from "../../components/stats";
import { useMenuContext } from "../../contexts/menu.context";

interface StatsPageProps {}

const StatsPage: React.FC<StatsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(9), []);
  
  return (
    <PageContainer>
      <StatMenu />
      <Stats />
    </PageContainer>
  );
};

export default StatsPage;
