import styled, { keyframes, css } from "styled-components";
import cross from '../assets/icons/close.png';

export const FadeAnim = keyframes`
  from {opacity: 0;}
  to {opacity: 0.6;}
`;

export const FadeAnim1 = keyframes`
  from {opacity: 0;}
  to {opacity: 0.6;}
`;

export const LightBoxShadow = css`
  box-shadow: rgb(0 0 0 / 70%) 1px 1px 6px 1px;
  &:hover {
    box-shadow: rgb(0 0 0 / 70%) 0px 0px 3px 1px inset;
  }
`;

export const LightBoxShadowNoHover = css`
  box-shadow: rgb(0 0 0 / 70%) 1px 1px 6px 1px;
`;

export const LightBoxShadowHover = css`
  box-shadow: rgb(0 0 0 / 70%) 0px 0px 3px 1px inset;
`;

export const DarkBoxShadow = css`
  box-shadow: rgb(245 244 249 / 70%) 1px 1px 6px 1px;
  &:hover {
    box-shadow: rgb(245 244 249 / 70%) 0px 0px 3px 1px inset;
  }
`;

export const DarkBoxShadowNoHover = css`
  box-shadow: rgb(245 244 249 / 70%) 1px 1px 6px 1px;
`;

export const DarkBoxShadowHover = css`
  box-shadow: rgb(245 244 249 / 70%) 0px 0px 3px 1px inset;
`;

export const CredBtn = styled.div<{dark: boolean}>`
  font-family: geomanist;
  padding: 0.42% 3% 1% 3%;
  border-radius: 0.3rem;
  cursor: pointer;
  display: grid;
  text-align: center;
  animation: ${FadeAnim1} 0.84s;
  border: 2.1px solid #1a1a1a;
  background-color: #1a1a1a;
  color: #f5f4f9;
  &:hover {
    background-color: #f5f4f9;
    color: #1a1a1a;
    font-weight: bold;
  }
  ${props => props.dark && `
    border: 2.1px solid #f5f4f9;
    background-color: #f5f4f9;
    color: #1a1a1a;
    &:hover {
      background-color: #1a1a1a;
      color: #f5f4f9;
      font-weight: bold;
    }
  `}
`;

export const HrzntlLn = styled.span<{dark: boolean}>`
  height: 0.2rem;
  width: 100%;
  align-self: center;
  border-radius: 0.42rem;
  opacity: 0.5;
  background-color: #1a1a1a;
  ${props => props.dark && `background-color: #f5f4f9;`}
`;

export const OverviewContainer = styled.div<{dark: boolean}>`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  ${props => props.dark && `background-color: rgba(256, 256, 256, 0.5);`}
`;

export const OverviewBox = styled.div<{dark: boolean; mobile: boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0.5%;
  border-radius: 0.42rem;
  gap: 0.42rem;
  a {all:unset;}
  background-color: #f5f4f9;
  ${props => props.dark && `background-color: #1a1a1a;`}
  ${props => props.mobile && `padding: 2%;`}
`;

export const CloseIcon = styled.img.attrs({
  src: cross,
  alt: 'close icon'
})<{dark: boolean}>`
  width: 1.2rem;
  height: auto;
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  ${props => props.dark && `filter: invert(100%);`}
`;

export const OverviewImage = styled.img<{
  dark: boolean;
  mobile: boolean;
}>`
  max-width: 90vw;
  max-height: 80vh;
  overflow: auto;
  height: auto;
  border-radius: 0.42rem;
  animation: ${FadeAnim1} 0.5s;
  border: 2px solid #1a1a1a;
  ${props => props.dark && `border: 2px solid #f5f4f9;`}
  ${props => props.mobile && `
    max-width: 90vw;
    max-height: 80vh;
  `}
`;
