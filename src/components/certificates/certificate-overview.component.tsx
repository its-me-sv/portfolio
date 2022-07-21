import { 
  OverviewContainer, OverviewBox,
  CloseIcon, CertImage, CredBtn
} from './styles';
import { certificatesTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface CertificateOverviewProps {}

const CertificateOverview: React.FC<CertificateOverviewProps> = () => {
  const { isDark, language, isMobile } = useCommonContext();
  const { currCertificate, setCurrCertificate } = useTranscriptContext();

  if (!currCertificate) return <div></div>;
  
  return (
    <OverviewContainer dark={isDark}>
      <OverviewBox dark={isDark} mobile={isMobile}>
        <CloseIcon dark={isDark} onClick={() => setCurrCertificate!(null)} />
        <CertImage
          dark={isDark}
          src={currCertificate.picture}
          alt={currCertificate.name}
          mobile={isMobile}
        />
        <a href={currCertificate.url} target="_blank" rel="noreferrer">
          <CredBtn dark={isDark}>
            {certificatesTranslations.verify[+language]}
          </CredBtn>
        </a>
      </OverviewBox>
    </OverviewContainer>
  );
};

export default CertificateOverview;
