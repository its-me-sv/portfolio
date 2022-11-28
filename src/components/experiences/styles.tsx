import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div`
  padding: 1.4% 0%;
  padding-left: auto;
  padding-right: auto;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3rem;
  place-items: center;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2.1rem;
    padding: 7% 0%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 42vw;
  height: 21rem;
  gap: 0.42rem;
  padding: 0.42% 1.6%;
  border-radius: 0.14rem;
  animation: ${FadeAnim1} 1s;
  ${(props) => props.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    width: 84vw;
    height: 100%;
    gap: 1rem;
    padding: 2%;
  }
`;

export const CardTop = styled.div<{ dark: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.4rem;
  opacity: 0.9;
  animation: ${FadeAnim1} 1s;
  color: ${(props) => props.theme.fontColor};
`;

export const Time = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.2rem;
  opacity: 0.9;
  animation: ${FadeAnim1} 1s;
  color: ${(props) => props.theme.fontColor};
`;

export const Company = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.2rem;
  opacity: 0.9;
  animation: ${FadeAnim1} 1s;
  color: ${(props) => props.theme.fontColor};
`;

export const Description = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.2rem;
  max-height: 11rem;
  overflow: auto;
  color: ${(props) => props.theme.fontColor};
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    /* max-height: unset; */
  }
`;

export const Skills = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  opacity: 0.9;
  max-height: 2.8rem;
  overflow: auto;
  animation: ${FadeAnim1} 1s;
  color: ${(props) => props.theme.fontColor};
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    max-height: unset;
  }
`;
