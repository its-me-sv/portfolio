import { Quote } from "../../data/quotes.data";

import { Card} from './styles';

interface QuoteCardProps extends Quote {}

const QuoteCard: React.FC<QuoteCardProps> = ({ content, id }) => {
  return (
    <Card>
      <span>{content}</span>
    </Card>
  );
};

export default QuoteCard;
