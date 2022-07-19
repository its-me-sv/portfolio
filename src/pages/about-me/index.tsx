import { useEffect } from 'react';

import { aboutPageTranslations } from '../../utils/translations.util';
import { 
  Container, 
  ContentContainer, 
  SubHeader, 
  Content, 
} from "./styles";

import { useMenuContext } from '../../contexts/menu.context';
import { useCommonContext } from '../../contexts/common.context';

interface AboutMePageProps {}

const AboutMePage: React.FC<AboutMePageProps> = () => {
  const { language } = useCommonContext();
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(1), []);

  return (
    <Container key={language}>
      <ContentContainer>
        <SubHeader>{aboutPageTranslations.brief[+language]}</SubHeader>
        <Content>{aboutPageTranslations.briefContent[+language]}</Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader>{aboutPageTranslations.iah[+language]}</SubHeader>
        <Content>{aboutPageTranslations.iahContent[+language]}</Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader>{aboutPageTranslations.edu[+language]}</SubHeader>
        <Content>{aboutPageTranslations.ps[+language]} - Don Bosco Nursery and Primary School</Content>
        <Content>{aboutPageTranslations.hs[+language]} - SBOA School & Junior College</Content>
        <Content>{aboutPageTranslations.clg[+language]} - Sri Venkateswara College of Engineering</Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader>{aboutPageTranslations.langs[+language]}</SubHeader>
        <Content>Tamil ({aboutPageTranslations.nat[+language]})</Content>
        <Content>English ({aboutPageTranslations.conv[+language]})</Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader>{aboutPageTranslations.etc[+language]}</SubHeader>
        <Content>{aboutPageTranslations.dob[+language]} - 11th May, 2002</Content>
        <Content>{aboutPageTranslations.favCol[+language]} - Blue</Content>
        <Content>{aboutPageTranslations.lovFud[+language]} - Anything edible and tasty</Content>
      </ContentContainer>
    </Container>
  );
};

export default AboutMePage;
