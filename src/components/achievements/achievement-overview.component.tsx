import { 
  OverviewContainer, OverviewBox, 
  CloseIcon, OverviewImage,
  CredBtn, OverviewHeader
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
    <OverviewContainer>
      <OverviewBox>
        <OverviewHeader>
          <div />
          <CloseIcon dark={isDark} onClick={() => setCurrAchievement!(null)} />
        </OverviewHeader>
        <OverviewImage
          src={currAchievement.credential_link}
          alt="credential"
        />
        {currAchievement.verify_url && (
          <CredBtn>
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
