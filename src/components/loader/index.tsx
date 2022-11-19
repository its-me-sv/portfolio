import { Container, SignatureFont, InfoText } from "./styles";

interface LoaderProps {
  initial?: boolean;
}

const Loader: React.FC<LoaderProps> = ({initial}) => {
  return (
    <Container>
      <SignatureFont>Suraj Vijayan</SignatureFont>
      {(initial && initial === true) && (
        <InfoText>
          Connecting to the back-end server. This may take a 
          few moments, and yes, this site is full stack.
        </InfoText>
      )}
    </Container>
  );
};

export default Loader;
