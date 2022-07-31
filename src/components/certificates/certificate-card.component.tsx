import { Certificate } from '../../data/certificates.data';

import { Card, Provider, Name, Issued } from './styles';
import { CredBtn } from "../../utils/styles.util";
import { transcriptPageTranslations } from "../../utils/translations.util";

import { useCommonContext } from '../../contexts/common.context';
import { useTranscriptContext } from '../../contexts/transcript.context';
import { useCallback } from 'react';

interface CertificateCardProps extends Certificate {}

const CertificateCard: React.FC<CertificateCardProps> = ({
  provider, name, date, picture, url
}) => {
  const { isDark, language } = useCommonContext();
  const { setCurrCertificate } = useTranscriptContext();

  const handleClick = useCallback(() => {
    const certififacte: Certificate = {
      provider, name, date,
      picture, url
    };
    setCurrCertificate!(certififacte);
  }, [provider, name, date, picture, url]);

  return (
    <Card dark={isDark}>
      <Provider src={provider} alt="issuer logo" />
      <Name dark={isDark}>{name}</Name>
      <Issued dark={isDark}>
        {transcriptPageTranslations.issuedOn[+language]}: {date}
      </Issued>
      <CredBtn dark={isDark} onClick={handleClick}>
        {transcriptPageTranslations.showCred[+language]}
      </CredBtn>
    </Card>
  );
};

export default CertificateCard;
