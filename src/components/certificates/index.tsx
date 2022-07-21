import { useEffect } from 'react';

import { Container } from './styles';

import CertificateCard from './certificate-card.component';
import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from '../../contexts/menu.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface CertificatesProps {}

const Certificates: React.FC<CertificatesProps> = () => {
  const { isMobile } = useCommonContext();
  const { setTransMenu } = useMenuContext();
  const { certificates } = useTranscriptContext();
  
  useEffect(() => setTransMenu!(0), []);

  return (
    <Container mobile={isMobile} >
      {certificates.map(certificate => (
        <CertificateCard 
          key={certificate.name} 
          {...certificate} 
        />
      ))}
    </Container>
  );
};

export default Certificates;
