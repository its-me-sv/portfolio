import { useEffect } from 'react';

import {useMenuContext} from '../../contexts/menu.context';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const {setMenu} = useMenuContext();
  
  useEffect(() => setMenu!(0), []);

  return <span>Home Page</span>;
};

export default HomePage;
