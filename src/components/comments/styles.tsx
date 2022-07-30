import styled from "styled-components";
import { FadeAnim1, LightBoxShadowNoHover, LightBoxShadowHover } from '../../utils/styles.util';

export const CommentsTitle = styled.span`
  position: absolute;
  align-self: flex-start;
  font-family: calibri;
  font-size: 1.6rem;
  animation: ${FadeAnim1} 1s;
  color: #1a1a1a;
`;

export const Body = styled.div`
  margin-top: 0.42rem;
  height: 77vh;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
  gap: 0.3rem;
  ${LightBoxShadowNoHover}
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
    &:focus {${LightBoxShadowHover}}
  }
`;
