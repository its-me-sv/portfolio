import { Container, SignatureFont } from "./styles";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <Container>
      <SignatureFont>Suraj Vijayan</SignatureFont>
    </Container>
  );
};

export default Loader;
