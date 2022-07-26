import { useEffect } from "react";

import { Container } from "./styles";

import Quotes from '../../components/quotes';
import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from "../../contexts/menu.context";

interface QuotesPageProps {}

const QuotesPage: React.FC<QuotesPageProps> = () => {
  const { isMobile } = useCommonContext();
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(7), []);
  
  return (
    <Container mobile={isMobile}>
      <Quotes />
    </Container>
  );
};

export default QuotesPage;
