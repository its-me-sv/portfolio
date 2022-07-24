import { Badge } from '../../utils/badges-data.util';
import { transcriptTranslations } from '../../utils/translations.util';

import { Card, Issued, BadgeImg } from './styles';
import { CredBtn } from '../../utils/styles.util';

import { useCommonContext } from '../../contexts/common.context';

interface BadgeCardProps extends Badge {}

const BadgeCard: React.FC<BadgeCardProps> = ({
  picture, url, issuer
}) => {
  const { isDark, isMobile, language } = useCommonContext();

  return (
    <Card dark={isDark} mobile={isMobile}>
      <BadgeImg src={picture} alt="badge logo" />
      <Issued dark={isDark}>
        {transcriptTranslations.issuedBy[+language]}: {issuer}
      </Issued>
      <CredBtn dark={isDark}>
        <a href={url} target="_blank" rel="noreferrer">
          {transcriptTranslations.verify[+language]}
        </a>
      </CredBtn>
    </Card>
  );
};

export default BadgeCard;
