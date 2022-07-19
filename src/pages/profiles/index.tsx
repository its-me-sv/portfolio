import { useEffect } from 'react';

import { Container } from './styles';
import { profileDetails } from '../../utils/profiles-data.util';

import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from '../../contexts/common.context';

interface ProfilesPageProps {}

const ProfilesPage: React.FC<ProfilesPageProps> = () => {
  const { language, isMobile } = useCommonContext();
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(2), []);

  return (
    <Container 
      key={language + (isMobile + '')}
      mobile={isMobile}
    >
      {profileDetails.map(({name, url, icon}) => (
        <a 
          href={url} 
          key={url} 
          target="_blank" 
          rel="noreferrer"
          title={name + ' Profile'}
        >
          <img src={icon} alt={name + ' Profile'} />
        </a>
      ))}
    </Container>
  );
};

export default ProfilesPage;
