import { useEffect } from 'react';

import { Container } from './styles';

import Profiles from '../../components/profiles';
import { useMenuContext } from '../../contexts/menu.context';

interface ProfilesPageProps {}

const ProfilesPage: React.FC<ProfilesPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(2), []);

  return (
    <Container>
      <Profiles />
    </Container>
  );
};

export default ProfilesPage;
