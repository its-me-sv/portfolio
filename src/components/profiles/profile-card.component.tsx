import { Profile } from "../../data/profiles.data";
import { profilePageTranslations } from '../../utils/translations.util';

import { Card, Company, Name, Username } from './styles';
import { CredBtn } from '../../utils/styles.util';

import { useCommonContext } from '../../contexts/common.context';

interface ProfileCardProps extends Profile {}

const ProfileCard: React.FC<ProfileCardProps> = ({
  icon, name, url, profile
}) => {
  const { isMobile, isDark, language } = useCommonContext();

  return (
    <Card dark={isDark} mobile={isMobile}>
      <Company src={icon} alt={name + " logo"} />
      <Name dark={isDark}>{name}</Name>
      <Username dark={isDark}>
        {profilePageTranslations.username[+language]}: {profile}
      </Username>
      <CredBtn dark={isDark}>
        <a href={url} target="_blank" rel="noreferrer">
          {profilePageTranslations.viewProfile[+language]}
        </a>
      </CredBtn>
    </Card>
  );
};

export default ProfileCard;
