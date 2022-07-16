import { Container, SignatureFont } from "./styles";

import { useCommonContext } from '../../contexts/common.context';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const {isDark} = useCommonContext();

  return (
    <Container dark={isDark}>
      <SignatureFont dark={isDark}>Suraj Vijay</SignatureFont>
    </Container>
  );
};

export default Loader;
