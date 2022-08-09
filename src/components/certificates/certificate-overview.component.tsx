import { 
  OverviewContainer, OverviewBox, 
  CloseIcon, OverviewImage, OverviewHeader
} from '../../utils/styles.util';
import { CredBtn } from "../../utils/styles.util";
import { transcriptPageTranslations } from "../../utils/translations.util";

import { useCommonContext } from '../../contexts/common.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface CertificateOverviewProps {}

const CertificateOverview: React.FC<CertificateOverviewProps> = () => {
  const { isDark, language } = useCommonContext();
  const { currCertificate, setCurrCertificate } = useTranscriptContext();

  if (!currCertificate) return <div />;
  
  return (
    <OverviewContainer>
      <OverviewBox>
        <OverviewHeader>
          <div />
          <CloseIcon dark={isDark} onClick={() => setCurrCertificate!(null)} />
        </OverviewHeader>
        <OverviewImage
          src={currCertificate.picture}
          alt={currCertificate.name}
        />
        {currCertificate.url && (
          <CredBtn>
            <a href={currCertificate.url} target="_blank" rel="noreferrer">
              {transcriptPageTranslations.verify[+language]}
            </a>
          </CredBtn>
        )}
      </OverviewBox>
    </OverviewContainer>
  );
};

export default CertificateOverview;
