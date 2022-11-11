import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
    gap: 2.1rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem 1rem;
  border-radius: 0.42rem;
  ${props => props.theme.boxShadowNoHover}
`;

export const SubSection = styled.div`
  padding-top: 0.36rem;
  display: flex;
  align-items: center;
  gap: 2.1rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.1rem;
  }
`;

export const SectionTitle = styled.span`
  font-family: core-sans-g;
  font-size: 1.8rem;
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
    font-family: core-sans-g;
    font-size: 1.6rem;
    text-align: center;
    opacity: 0.8;
    animation: ${FadeAnim1} 1s;
    color: ${(props) => props.theme.fontColor};
    &:last-child {
      font-family: core-sans-g;
    }
  }
`;
