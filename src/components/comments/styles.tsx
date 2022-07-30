import styled from "styled-components";
import { FadeAnim1, LightBoxShadowNoHover, LightBoxShadowHover, DarkBoxShadowNoHover } from '../../utils/styles.util';

export const CommentsTitle = styled.span<{dark: boolean}>`
  position: absolute;
  align-self: flex-start;
  font-family: calibri;
  font-size: 1.6rem;
  animation: ${FadeAnim1} 1s;
  color: #1a1a1a;
  ${props => props => props.dark && `color: #f5f4f9;`}
`;

export const Body = styled.div`
  margin-top: 0.42rem;
  height: 77vh;
`;

export const Footer = styled.div<{dark: boolean}>`
  display: grid;
  grid-template-columns: 8fr 1fr;
  gap: 0.3rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
  textarea, textarea::placeholder {
    resize: none;
    outline: none;
    border: none;
    font-family: montserrat;
    border-radius: 0.3rem;
    font-size: 1rem;
    padding-left: 0.28rem;
    color: #1a1a1a;
    background-color: #c5c5c1;
    ${props => props.dark && `
      color: #f5f4f9;
      background-color: #2c2c2b;
    `}
    &:focus {${LightBoxShadowHover}}
  }
`;
