import { Certificate } from '../../utils/certificates-data.util';

import { Card, Provider, Name, Issued, CredBtn } from './styles';
import { transcriptTranslations } from "../../utils/translations.util";

import { useCommonContext } from '../../contexts/common.context';
import { useTranscriptContext } from '../../contexts/transcript.context';
import { useCallback } from 'react';

interface CertificateCardProps extends Certificate {}

const CertificateCard: React.FC<CertificateCardProps> = ({
  provider, name, date, picture, url
}) => {
  const { isDark, language, isMobile } = useCommonContext();
  const { setCurrCertificate } = useTranscriptContext();

  const handleClick = useCallback(() => {
    const certififacte: Certificate = {
      provider, name, date,
      picture, url
    };
    setCurrCertificate!(certififacte);
  }, [provider, name, date, picture, url]);

  return (
    <Card dark={isDark} mobile={isMobile}>
      <Provider src={provider} alt="issuer logo" />
      <Name dark={isDark}>{name}</Name>
      <Issued dark={isDark}>
        {transcriptTranslations.issuedOn[+language]}: {date}
      </Issued>
      <CredBtn dark={isDark} onClick={handleClick}>
        {transcriptTranslations.showCred[+language]}
      </CredBtn>
    </Card>
  );
};

export default CertificateCard;
