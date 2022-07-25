import { profiles } from "../../data/profiles.data";

import ProfileCard from './profile-card.component';

interface ProfilesProps {}

const Profiles: React.FC<ProfilesProps> = () => {
  return (
    <>
      {profiles.map(profile => (
        <ProfileCard key={profile.profile} {...profile} />
      ))}
    </>
  );
};

export default Profiles;
