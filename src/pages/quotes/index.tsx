import { useEffect } from "react";

import { Container } from "./styles";

import Quotes from '../../components/quotes';
import { useMenuContext } from "../../contexts/menu.context";

interface QuotesPageProps {}

const QuotesPage: React.FC<QuotesPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(7), []);
  
  return (
    <Container>
      <Quotes />
    </Container>
  );
};

export default QuotesPage;
