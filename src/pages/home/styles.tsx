import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  animation: ${FadeAnim1} 1s;
`;

export const MidHeader = styled.div`
  display: flex;
  flex-direction: column;
  span {
    &:last-child {
      font-family: core-sans-g;
      font-size: 1.2rem;
      color: ${(props) => props.theme.fontColor};
    }
  }
`;

export const MyImage = styled.img.attrs({alt: "Suraj Vijayan"})`
  height: 18rem;
  width: auto;
  /* desktop styles */
  @media only screen and (min-width: 768px) {
    height: 42vh;
    width: auto;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const TitleText = styled.span`
  font-family: core-sans-g;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(
    135deg,
    #0e73cc 1.93%,
    #624bbb 14.86%,
    #ff455d 48.09%,
    #f35815 77.82%,
    #f2b600 97.3%
  );
  font-size: 1.8rem;
`;

export const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  color: ${props => props.theme.fontColor};
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0 1%;
  }
`;

export const BodyTitleText = styled.span`
  font-family: core-sans-g;
  font-size: 1.4rem;
  color: ${(props) => props.theme.fontColor};
`;

export const SubBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.36rem;
  animation: ${FadeAnim1} 1s;
`;

export const SubHeading = styled.span`
  font-family: core-sans-g;
  font-size: 1.4rem;
  color: ${(props) => props.theme.fontColor};
  text-transform: uppercase;
`;

export const Content = styled.span`
  font-family: core-sans-g;
  font-size: 1.4rem;
  color: ${(props) => props.theme.contentColor};
`;
