import { useEffect } from 'react';

import { certificates } from '../../utils/certificates-data.util';
import { Container } from './styles';

import CertificateCard from './certificate-card.component';
import { useMenuContext } from '../../contexts/menu.context';

interface CertificatesProps {}

const Certificates: React.FC<CertificatesProps> = () => {
  const { setTransMenu } = useMenuContext();
  
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
