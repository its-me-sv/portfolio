import { quotes } from "../../data/quotes.data";

import QuoteCard from './quote-card.component';

interface QuotesProps {}

const Quotes: React.FC<QuotesProps> = () => {
  return (
    <>
      {quotes.map(quote => (
        <QuoteCard key={quote.id} {...quote} />
      ))}
    </>
  );
};

export default Quotes;
