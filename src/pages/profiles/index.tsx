import { useEffect } from 'react';

import { Container } from './styles';

import Profiles from '../../components/profiles';
import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from '../../contexts/common.context';

interface ProfilesPageProps {}

const ProfilesPage: React.FC<ProfilesPageProps> = () => {
  const { language, isMobile } = useCommonContext();
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(2), []);

  return (
    <Container key={language + (isMobile + "")} mobile={isMobile}>
      <Profiles />
    </Container>
  );
};

export default ProfilesPage;
