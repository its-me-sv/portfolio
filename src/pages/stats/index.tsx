import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";

interface StatsPageProps {}

const StatsPage: React.FC<StatsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(8), []);
  
  return <h1>Stats</h1>;
};

export default StatsPage;
