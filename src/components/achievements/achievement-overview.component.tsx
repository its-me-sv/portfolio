import { 
  OverviewContainer, OverviewBox, 
  CloseIcon, OverviewImage,
  CredBtn
} from '../../utils/styles.util';
import { transcriptPageTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementOverviewProps {}

const AchievementOverview: React.FC<AchievementOverviewProps> = () => {
  const { isMobile, isDark, language } = useCommonContext();
  const { currAchievement, setCurrAchievement } = useAchievementContext();

  if (!currAchievement) return <div />;

  return (
    <OverviewContainer dark={isDark}>
      <OverviewBox dark={isDark} mobile={isMobile}>
        <CloseIcon dark={isDark} onClick={() => setCurrAchievement!(null)} />
        <OverviewImage
          dark={isDark}
          mobile={isMobile}
          src={currAchievement.credUrl}
          alt="credential"
        />
        {currAchievement.verifyUrl && (
          <CredBtn dark={isDark}>
            <a href={currAchievement.verifyUrl} target="_blank" rel="noreferrer">
              {transcriptPageTranslations.verify[+language]}
            </a>
          </CredBtn>
        )}
      </OverviewBox>
    </OverviewContainer>
  );
};

export default AchievementOverview;
