import { Certificate } from '../../utils/certificates-data.util';

import { Card, Provider, Name, Issued, CredBtn } from './styles';

interface CertificateCardProps extends Certificate {}

const CertificateCard: React.FC<CertificateCardProps> = ({
  provider, name, date
}) => {
  return (
    <Card>
      <Provider src={provider} alt="issuer logo" />
      <Name>{name}</Name>
      <Issued>Issued on: {date}</Issued>
      <CredBtn>Show credential</CredBtn>
    </Card>
  );
};

export default CertificateCard;
