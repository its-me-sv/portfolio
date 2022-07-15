import {useEffect} from 'react';

import {useMenuContext} from '../../contexts/menu.context';

interface ProfilesPageProps {}

const ProfilesPage: React.FC<ProfilesPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(2), []);

  return <h1>Profiles</h1>;
};

export default ProfilesPage;
