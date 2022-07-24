import { 
  OverviewContainer, OverviewBox, 
  CloseIcon, OverviewImage
} from '../../utils/styles.util';

import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementOverviewProps {}

const AchievementOverview: React.FC<AchievementOverviewProps> = () => {
  const { isMobile, isDark } = useCommonContext();
  const { currAchievement, setCurrAchievement } = useAchievementContext();

  if (!currAchievement) return <div />;

  return (
    <OverviewContainer dark={isDark}>
      <OverviewBox dark={isDark} mobile={isMobile}>
        <CloseIcon dark={isDark} onClick={() => setCurrAchievement!(null)} />
        <OverviewImage
          dark={isDark}
          mobile={isMobile}
          src={currAchievement}
          alt="credential"
        />
      </OverviewBox>
    </OverviewContainer>
  );
};

export default AchievementOverview;
