import { Certificate } from '../../utils/certificates-data.util';

import { Card, Provider, Name, Issued, CredBtn } from './styles';
import { certificatesTranslations } from '../../utils/translations.util';

import { useCommonContext } from "../../contexts/common.context";

interface CertificateCardProps extends Certificate {}

const CertificateCard: React.FC<CertificateCardProps> = ({
  provider, name, date
}) => {
  const { isDark, language } = useCommonContext();

  return (
    <Card dark={isDark} key={name+language + (isDark+'')}>
      <Provider src={provider} alt="issuer logo" />
      <Name dark={isDark}>{name}</Name>
      <Issued dark={isDark}>
        {certificatesTranslations.issuedOn[+language]}: {date}
      </Issued>
      <CredBtn dark={isDark}>
        {certificatesTranslations.showCred[+language]}
      </CredBtn>
    </Card>
  );
};

export default CertificateCard;
