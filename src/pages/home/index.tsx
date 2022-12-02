import { useEffect } from 'react';

import {
  Container,
  MyImage,
  TitleText,
  BodyTextContainer,
  BodyTitleText,
  SubHeading,
  Content,
  SubBody,
  MidHeader
} from "./styles";
import noGradImg from '../../assets/images/no_grad.png';
import gradImg from '../../assets/images/grad.png';
import { homePageTranslations } from '../../utils/translations.util';

import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from '../../contexts/common.context';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { isMobile, isDark, language } = useCommonContext();
  const { setMenu } = useMenuContext();
  
  useEffect(() => setMenu!(0), []);

  return (
    <Container>
      <MyImage src={isDark ? gradImg : noGradImg} />
      {!isMobile && <div />}
      <MidHeader>
        <TitleText>Suraj Vijayan</TitleText>
        <span>{homePageTranslations.since[+language]}</span>
      </MidHeader>
      <BodyTextContainer>
        <BodyTitleText>{homePageTranslations.fsd[+language]}</BodyTitleText>
        <SubBody>
          <Content>
            <SubHeading>
              {homePageTranslations.student[+language]}
            </SubHeading>{" "}
            {homePageTranslations.at[+language]} Sri Venkateswara College of
            Engineering
          </Content>
          <Content>
            <SubHeading>
              {homePageTranslations.resident[+language]}
            </SubHeading>{" "}
            {homePageTranslations["of"][+language]} Chennai, TN, India
          </Content>
          <Content>surajvijay67@gmail.com</Content>
        </SubBody>
      </BodyTextContainer>
    </Container>
  );
};

export default HomePage;
