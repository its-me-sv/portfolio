import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.42% 0.84%;
  border-radius: 0.14rem;
  gap: 0.14rem;
  animation: ${FadeAnim1} 1s;
  ${props => props.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0.7rem;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${(props) => props.theme.fontColor};
`;

export const Description = styled.span`
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.2rem;
  color: ${(props) => props.theme.fontColor};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.14rem;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.14rem;
    &:hover {
      opacity: 0.5;
    }
    span {
      font-family: ${props => props.theme.fontFamily};;
      font-size: 1.2rem;
      color: ${(props) => props.theme.fontColor};
    }
  }
`;
