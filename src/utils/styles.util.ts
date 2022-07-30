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

export const CredBtn = styled.div<{dark: boolean; disabled?: boolean; comment?: boolean}>`
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
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}
  ${props => props.comment && `
    display: flex;
    align-items: center;
    justify-content: center;
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

export const OverviewHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const OverviewTitle = styled.span<{dark: boolean}>`
  font-family: calibri;
  font-size: 1.6rem;
  animation: ${FadeAnim1} 1s;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const OverviewBox = styled.div<{dark: boolean; mobile: boolean; comments?: boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0.5%;
  border-radius: 0.42rem;
  gap: 0.42rem;
  a {all:unset;}
  background-color: #f5f4f9;
  ${props => props.dark && `background-color: #1a1a1a;`}
  ${props => props.mobile && `padding: 2%;`}
  ${props => props.comments && `
    width: 50vw;
    height: 77vh;
    overflow: auto;
  `}
  ${props => (props.mobile && props.comments) && `
    width: 84vw; 
    height: 84vh
  `}
`;

export const CloseIcon = styled.img.attrs({
  src: cross,
  alt: 'close icon'
})<{dark: boolean}>`
  width: 1.2rem;
  height: auto;
  cursor: pointer;
  &:hover { opacity: 0.7; }
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

export const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr;
  overflow: auto;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.4%;
  animation: ${FadeAnim1} 1s;
  padding: 0 7%;
`;

export const MenuItem = styled.span<{ selected: boolean; dark?: boolean }>`
  font-family: geomanist;
  font-size: 1.6rem;
  opacity: 0.7;
  cursor: pointer;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
  ${(props) => props.selected && `
    text-decoration: underline;
    opacity: 1;
  `}
`;
