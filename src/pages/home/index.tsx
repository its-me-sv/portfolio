import { useEffect, useState } from 'react';

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
  const {isMobile} = useCommonContext();
  const {setMenu} = useMenuContext();

  const [imageHover, setImageHover] = useState<boolean>(false);
  
  useEffect(() => setMenu!(0), []);

  return (
    <Container>
      <MyImage 
        src={imageHover ? gradImg : noGradImg} 
        mobile={isMobile}
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
      />
      <div/>
      <TitleText>I'm a CODER, Bruh.</TitleText>
      <BodyTextContainer>
        <BodyTitleText>suraj vijay</BodyTitleText>
        <SubBody>
          <Content>
            <SubHeading>STUDENT</SubHeading> at Sri Venkateswara College of
            Engineering
          </Content>
          <Content>
            <SubHeading>RESIDENT</SubHeading> of Park Road, Anna Nagar West Extn,
            Chennai, TN 600 - 101, India
          </Content>
          <Content>surajvijay67@gmail.com</Content>
        </SubBody>
      </BodyTextContainer>
    </Container>
  );
};

export default HomePage;
