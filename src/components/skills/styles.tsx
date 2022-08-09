import styled from "styled-components";
import { FadeAnim1, LightBoxShadow, DarkBoxShadow } from '../../utils/styles.util';

export const Container = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  }
`;

export const Card = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 12rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.42rem;
  justify-content: space-around;
  padding: 0.42% 0;
  animation: ${FadeAnim1} 1s;
  a {all: unset;}
  ${LightBoxShadow}
  img {
    width: 7rem;
    height: auto;
    border-radius: 0.42rem;
    animation: ${FadeAnim1} 1s;
  }
  ${(props) => props.dark && `${DarkBoxShadow}`}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
    width: 10rem;
    height: 12rem;
    padding-bottom: 1rem;
  }
`;

export const Name = styled.span`
  font-family: roboto;
  font-size: 1.2rem;
  color: ${props => props.theme.fontColor};
`;
