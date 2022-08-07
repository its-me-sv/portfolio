import { 
  OverviewContainer, OverviewBox, 
  CloseIcon, OverviewImage,
  CredBtn, OverviewHeader, OverviewTitle
} from '../../utils/styles.util';
import { transcriptPageTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';
import { useAchievementContext } from '../../contexts/achievement.context';

interface AchievementOverviewProps {}

const AchievementOverview: React.FC<AchievementOverviewProps> = () => {
  const { isDark, language } = useCommonContext();
  const { currAchievement, setCurrAchievement } = useAchievementContext();

  if (!currAchievement) return <div />;

  return (
    <OverviewContainer dark={isDark}>
      <OverviewBox dark={isDark}>
        <OverviewHeader>
          <div />
          <CloseIcon dark={isDark} onClick={() => setCurrAchievement!(null)} />
        </OverviewHeader>
        <OverviewImage
          dark={isDark}
          src={currAchievement.credential_link}
          alt="credential"
        />
        {currAchievement.verify_url && (
          <CredBtn dark={isDark}>
            <a
              href={currAchievement.verify_url}
              target="_blank"
              rel="noreferrer"
            >
              {transcriptPageTranslations.verify[+language]}
            </a>
          </CredBtn>
        )}
      </OverviewBox>
    </OverviewContainer>
  );
};

export default AchievementOverview;
