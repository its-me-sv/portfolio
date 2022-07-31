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
      <MyImage src={isDark ? gradImg : noGradImg} mobile={isMobile} />
      {!isMobile && <div />}
      <MidHeader>
        <TitleText>{"<DarkKnight />"}</TitleText>
        <span>Since 2002</span>
      </MidHeader>
      <BodyTextContainer mobile={isMobile} dark={isDark}>
        <BodyTitleText>Suraj Vijay</BodyTitleText>
        <SubBody key={language}>
          <Content dark={isDark}>
            <SubHeading dark={isDark}>
              {homePageTranslations.student[+language]}
            </SubHeading>{" "}
            {homePageTranslations.at[+language]} Sri Venkateswara College of
            Engineering
          </Content>
          <Content dark={isDark}>
            <SubHeading dark={isDark}>
              {homePageTranslations.resident[+language]}
            </SubHeading>{" "}
            {homePageTranslations["of"][+language]} Park Road, Anna Nagar West
            Extn, Chennai, TN 600 - 101, India
          </Content>
          <Content dark={isDark}>surajvijay67@gmail.com</Content>
        </SubBody>
      </BodyTextContainer>
    </Container>
  );
};

export default HomePage;
