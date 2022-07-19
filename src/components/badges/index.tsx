import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";

interface BadgesProps {}

const Badges: React.FC<BadgesProps> = () => {
  const { setTransMenu } = useMenuContext();

  useEffect(() => setTransMenu!(1), []);

  return <div>Badges</div>;
};

export default Badges;
