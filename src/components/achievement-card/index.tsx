import { Achievement } from "../../utils/achievements-data";

import { Card, Top, Name, Description, Footer, Interactions } from './styles';
import { CredBtn, HrzntlLn } from "../../utils/styles.util";
import { transcriptTranslations } from '../../utils/translations.util';
import likeIcon from "../../assets/icons/like.png";
import commentIcon from "../../assets/icons/comment.png";

import { useCommonContext } from '../../contexts/common.context';

interface AchievementCardProps extends Achievement {}

const AchievementCard: React.FC<AchievementCardProps> = ({
  name, description
}) => {
  const { isDark, language } = useCommonContext();

  return (
    <Card dark={isDark}>
      <Top>
        <Name dark={isDark}>{name}</Name>
        <HrzntlLn dark={isDark} />
      </Top>
      <Description dark={isDark}>{description}</Description>
      <Footer>
        <Interactions dark={isDark}>
          <div>
            <img src={likeIcon} alt="clap" />
            <span>37</span>
          </div>
          <div>
            <img src={commentIcon} alt="comment" />
            <span>34</span>
          </div>
        </Interactions>
        <CredBtn dark={isDark} key={language}>
          {transcriptTranslations.showCred[+language]}
        </CredBtn>
      </Footer>
    </Card>
  );
};

export default AchievementCard;
