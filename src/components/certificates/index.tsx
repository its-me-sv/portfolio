import { useEffect } from 'react';

import { Container } from './styles';

import CertificateCard from './certificate-card.component';
import { useMenuContext } from '../../contexts/menu.context';
import { useTranscriptContext } from '../../contexts/transcript.context';

interface CertificatesProps {}

const Certificates: React.FC<CertificatesProps> = () => {
  const { setTransMenu } = useMenuContext();
  const { certificates } = useTranscriptContext();
  
  useEffect(() => setTransMenu!(0), []);

  return (
    <Container>
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
