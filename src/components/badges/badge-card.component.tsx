import { Badge } from '../../data/badges.data';
import { transcriptPageTranslations } from '../../utils/translations.util';

import { Card, Issued, BadgeImg } from './styles';
import { CredBtn } from '../../utils/styles.util';

import { useCommonContext } from '../../contexts/common.context';

interface BadgeCardProps extends Badge {}

const BadgeCard: React.FC<BadgeCardProps> = ({
  picture, url, issuer
}) => {
  const { language } = useCommonContext();

  return (
    <Card>
      <BadgeImg src={picture} alt="badge logo" />
      <Issued>
        {transcriptPageTranslations.issuedBy[+language]}: {issuer}
      </Issued>
      <CredBtn>
        <a href={url} target="_blank" rel="noreferrer">
          {transcriptPageTranslations.verify[+language]}
        </a>
      </CredBtn>
    </Card>
  );
};

export default BadgeCard;
