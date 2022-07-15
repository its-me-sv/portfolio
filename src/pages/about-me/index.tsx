import { useEffect } from 'react';

import {useMenuContext} from '../../contexts/menu.context';

interface AboutMePageProps {}

const AboutMePage: React.FC<AboutMePageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(1), []);

  return <h1>About me</h1>;
};

export default AboutMePage;
