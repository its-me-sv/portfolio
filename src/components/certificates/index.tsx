import { useEffect } from 'react';

import { useMenuContext } from '../../contexts/menu.context';

interface CertificatesProps {}

const Certificates: React.FC<CertificatesProps> = () => {
  const { setTransMenu } = useMenuContext();
  
  useEffect(() => setTransMenu!(0), []);

  return (
    <h1>Certificates</h1>
  );
};

export default Certificates;
