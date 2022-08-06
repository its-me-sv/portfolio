import { Quote } from "../../data/quotes.data";
import heartIcon from '../../assets/icons/heart.png';

import { useCommonContext } from '../../contexts/common.context';

import { Card } from './styles';

interface QuoteCardProps extends Quote {}

const QuoteCard: React.FC<QuoteCardProps> = ({ content, id }) => {
  const { isDark } = useCommonContext();

  return (
    <Card dark={isDark}>
      <span>{content}</span>
      <div>
        <img alt="" src={heartIcon} />
        <span>2.3k</span>
      </div>
    </Card>
  );
};

export default QuoteCard;
