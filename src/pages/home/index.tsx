import { useEffect } from 'react';

import {
  Container,
  MyImage,
  TitleText,
  BodyTextContainer,
  BodyTitleText,
  SubHeading,
  Content,
  SubBody
} from "./styles";
import noGradImg from '../../assets/images/no_grad.png';
import gradImg from '../../assets/images/grad.png';

import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from '../../contexts/common.context';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const {isMobile, isDark} = useCommonContext();
  const {setMenu} = useMenuContext();
  
  useEffect(() => setMenu!(0), []);

  return (
    <Container key={isDark+''}>
      <MyImage
        src={isDark ? gradImg : noGradImg}
        mobile={isMobile}
      />
      {!isMobile && <div />}
      <TitleText>I'm a CODER, Bruh.</TitleText>
      <BodyTextContainer mobile={isMobile} dark={isDark}>
        <BodyTitleText>suraj vijay</BodyTitleText>
        <SubBody>
          <Content dark={isDark}>
            <SubHeading dark={isDark}>STUDENT</SubHeading> at Sri Venkateswara
            College of Engineering
          </Content>
          <Content dark={isDark}>
            <SubHeading dark={isDark}>RESIDENT</SubHeading> of Park Road, Anna
            Nagar West Extn, Chennai, TN 600 - 101, India
          </Content>
          <Content dark={isDark}>surajvijay67@gmail.com</Content>
        </SubBody>
      </BodyTextContainer>
    </Container>
  );
};

export default HomePage;
