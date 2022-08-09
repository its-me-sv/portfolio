import { Container, SignatureFont } from "./styles";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <Container>
      <SignatureFont>Suraj Vijay</SignatureFont>
    </Container>
  );
};

export default Loader;
