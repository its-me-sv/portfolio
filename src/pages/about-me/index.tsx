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
  const { language, isDark } = useCommonContext();
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(1), []);

  return (
    <Container>
      <ContentContainer>
        <SubHeader key={language + (isDark + '2')}>
          {aboutPageTranslations.brief[+language]}
        </SubHeader>
        <Content key={language + (isDark + '3')}>
          {aboutPageTranslations.briefContent[+language]}
        </Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader key={language + (isDark + '4')}>
          {aboutPageTranslations.iah[+language]}
        </SubHeader>
        <Content key={language + (isDark + '5')}>
          {aboutPageTranslations.iahContent[+language]}
        </Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader key={language + (isDark + '6')}>
          {aboutPageTranslations.edu[+language]}
        </SubHeader>
        <Content key={language + (isDark + '7')}>
          {aboutPageTranslations.ps[+language]} - Don Bosco Nursery and Primary School
        </Content>
        <Content key={language + (isDark + '8')}>
          {aboutPageTranslations.hs[+language]} - SBOA School & Junior College
        </Content>
        <Content key={language + (isDark + '9')}>
          {aboutPageTranslations.clg[+language]} - Sri Venkateswara College of Engineering
        </Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader key={language + (isDark + '10')}>
          {aboutPageTranslations.langs[+language]}
        </SubHeader>
        <Content key={language + (isDark + '11')}>
          Tamil ({aboutPageTranslations.nat[+language]})
        </Content>
        <Content key={language + (isDark + '12')}>
          English ({aboutPageTranslations.conv[+language]})
        </Content>
      </ContentContainer>
      <ContentContainer>
        <SubHeader key={language + (isDark + '13')}>
          {aboutPageTranslations.moreAbtMe[+language]}
        </SubHeader>
        <Content key={language + (isDark + '14')}>
          {aboutPageTranslations.dob[+language]} - 11th May, 2002
        </Content>
        <Content key={language + (isDark + '15')}>
          {aboutPageTranslations.favCol[+language]} - Blue
        </Content>
        <Content key={language + (isDark + '16')}>
          {aboutPageTranslations.lovFud[+language]} - Anything edible and tasty
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default AboutMePage;
