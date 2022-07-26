import { quotes } from "../../data/quotes.data";

import QuoteCard from './quote-card.component';

interface QuotesProps {}

const Quotes: React.FC<QuotesProps> = () => {
  return (
    <>
      {quotes.map((quote, idx) => (
        <QuoteCard key={idx} {...quote} />
      ))}
    </>
  );
};

export default Quotes;
