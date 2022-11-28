import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0rem 1.2rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 1.4rem 2rem;
    gap: 1.2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1.2rem 0.5rem 1.2rem;
  border-radius: 0.14rem;
  ${(props) => props.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1.2rem;
  }
`;

export const SubSection = styled.div`
  padding-top: 0.36rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.1.2rem;
  }
`;

export const SectionTitle = styled.span`
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.4rem;
  opacity: 0.7;
  text-decoration: underline;
  animation: ${FadeAnim1} 1s;
  color: ${(props) => props.theme.fontColor};
`;

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.07rem;
  span {
    font-family: ${props => props.theme.fontFamily};;
    font-size: 1.4rem;
    text-align: center;
    opacity: 0.8;
    animation: ${FadeAnim1} 1s;
    color: ${(props) => props.theme.fontColor};
    &:last-child {
      font-family: ${props => props.theme.fontFamily};;
    }
  }
`;
