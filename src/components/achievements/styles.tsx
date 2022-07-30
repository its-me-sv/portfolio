import styled from "styled-components";
import { LightBoxShadow, DarkBoxShadow, FadeAnim1 } from "../../utils/styles.util";

export const Card = styled.div<{dark: boolean; mobile: boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0.42% 0.84%;
  border-radius: 0.42rem;
  gap: 0.42rem;
  animation: ${FadeAnim1} 1s;
  ${LightBoxShadow}
  ${props => props.dark && DarkBoxShadow}
  ${props => props.mobile && `padding: 0.5% 0.7rem`}
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span<{dark: boolean}>`
  font-family: geomanist;
  font-size: 1.8rem;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const Description = styled.span<{dark: boolean}>`
  font-family: arial;
  font-size: 1.2rem;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Interactions = styled.div<{dark: boolean}>`
  display: flex;
  align-items: center;
  gap: 0.42rem;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.3rem;
    &:hover {opacity: 0.5;}
    img {
      width: 2.1rem;
      height: auto;
      opacity: 0.9;
      ${props => props.dark && `filter: invert(100%);`}
    }
    span {
      font-family: arial;
      font-size: 1.2rem;
      color: #1a1a1a;
      ${props => props.dark && `color: #f5f4f9;`}
    }
  }
`;
