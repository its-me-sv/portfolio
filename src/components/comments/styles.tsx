import styled from "styled-components";
import { FadeAnim1, LightBoxShadowHover, LightBoxShadow, DarkBoxShadow } from '../../utils/styles.util';

export const CommentsTitle = styled.span<{dark: boolean}>`
  font-family: calibri;
  font-size: 1.6rem;
  animation: ${FadeAnim1} 1s;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const Body = styled.div`
  margin-top: 0.42rem;
  height: 77vh;
  padding: 0.14rem 0.42rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
  overflow: auto;
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

export const Card = styled.div<{dark: boolean}>`
  display: flex;
  align-items: flex-start;
  animation: ${FadeAnim1} 0.42s;
  gap: 0.3rem;
  img {
    width: 2.1rem;
    border-radius: 50%;
    /* border: 0.7px solid #1a1a1a; */
    /* ${props => props.dark && `border-color: #f5f4f9;`} */
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 0.21rem;
    border-radius: 0.21rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    ${props => props.dark && `background-color: rgba(255, 255, 255, 0.1);`}
  }
  span {
    font-family: montserrat;
    font-size: 1.2rem;
    max-height: 14vh;
    overflow: auto;
    color: #1a1a1a;
    ${props => props.dark && `color: #f5f4f9;`}
    &:first-child {
      align-self: flex-end;
      font-family: bahnschrift;
      opacity: 0.84;
      font-size: 0.84rem;
    }
  }
`;

export const LoadMore = styled.span<{dark: boolean}>`
  align-self: center;
  margin-bottom: 0.42rem;
  border-radius: 0.21rem;
  padding: 0.3rem;
  padding-top: 0rem;
  padding-bottom: 0.14rem;
  cursor: pointer;
  color: #1a1a1a;
  ${LightBoxShadow}
  ${props => props.dark && `
    color: #f5f4f9;
    ${DarkBoxShadow}
  `}
`;
