import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";

interface QuotesPageProps {}

const QuotesPage: React.FC<QuotesPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(7), []);
  
  return <h1>Quotes</h1>;
};

export default QuotesPage;
