import { 
  OverviewContainer, OverviewBox, 
  CloseIcon, OverviewImage
} from '../../utils/styles.util';
import { CredBtn } from "../../utils/styles.util";
import { transcriptTranslations } from "../../utils/translations.util";

import { useCommonContext } from '../../contexts/common.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface CertificateOverviewProps {}

const CertificateOverview: React.FC<CertificateOverviewProps> = () => {
  const { isDark, language, isMobile } = useCommonContext();
  const { currCertificate, setCurrCertificate } = useTranscriptContext();

  if (!currCertificate) return <div />;
  
  return (
    <OverviewContainer dark={isDark}>
      <OverviewBox dark={isDark} mobile={isMobile}>
        <CloseIcon dark={isDark} onClick={() => setCurrCertificate!(null)} />
        <OverviewImage
          dark={isDark}
          src={currCertificate.picture}
          alt={currCertificate.name}
          mobile={isMobile}
        />
        {currCertificate.url && (
          <CredBtn dark={isDark}>
            <a href={currCertificate.url} target="_blank" rel="noreferrer">
              {transcriptTranslations.verify[+language]}
            </a>
          </CredBtn>
        )}
      </OverviewBox>
    </OverviewContainer>
  );
};

export default CertificateOverview;
