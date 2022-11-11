import styled, { createGlobalStyle, keyframes } from "styled-components";
import cross from '../assets/icons/close.png';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.fontColor};
    transition: all 0.50s linear;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  /* ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.42rem;
    background: ${props => props.theme.scrollBarBg};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 0.42rem;
    background: linear-gradient(to top, #e14fad 0%, #f9d423 100%);
  } */
`;

export const FadeAnim = keyframes`
  from {opacity: 0;}
  to {opacity: 0.6;}
`;

export const FadeAnim1 = keyframes`
  from {opacity: 0;}
  to {opacity: 0.6;}
`;

export const CredBtn = styled.div<{disabled?: boolean; comment?: boolean}>`
  font-family: core-sans-g;
  padding: 0.42% 3% 1% 3%;
  border-radius: 0.3rem;
  cursor: pointer;
  display: grid;
  text-align: center;
  animation: ${FadeAnim1} 0.84s;
  border: 2.1px solid ${props => props.theme.fontColor};
  background-color: ${props => props.theme.fontColor};
  color: ${props => props.theme.backgroundColor};
  &:hover {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.fontColor};
    font-weight: bold;
  }
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

export const HrzntlLn = styled.span`
  height: 0.2rem;
  width: 100%;
  align-self: center;
  border-radius: 0.42rem;
  opacity: 0.5;
  background-color: ${props => props.theme.fontColor};
`;

export const OverviewContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.overviewBg};
`;

export const OverviewHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const OverviewTitle = styled.span`
  font-family: core-sans-g;
  font-size: 1.6rem;
  animation: ${FadeAnim1} 1s;
  color: ${props => props.theme.fontColor};
`;

export const OverviewBox = styled.div<{comments?: boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0.5%;
  border-radius: 0.42rem;
  gap: 0.42rem;
  a {all:unset;}
  background-color: ${props => props.theme.backgroundColor};
  ${props => props.comments && `
    width: 50vw;
    height: 77vh;
    overflow: auto;
  `}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 2%;
    ${props => props.comments && `
      width: 84vw; 
      height: 84vh;
    `}
  }
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

export const OverviewImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  overflow: auto;
  height: auto;
  border-radius: 0.42rem;
  animation: ${FadeAnim1} 0.5s;
  border: 2px solid ${props => props.theme.borderColor};
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    max-width: 90vw;
    max-height: 80vh;
  }
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

export const MenuItem = styled.span<{selected: boolean}>`
  font-family: core-sans-g;
  font-size: 1.6rem;
  opacity: 0.7;
  cursor: pointer;
  color: ${props => props.theme.fontColor};
  ${(props) => props.selected && `
    text-decoration: underline;
    opacity: 1;
  `}
`;

export const InteractionIcon = styled.img<{ dark: boolean; disabled?: boolean }>`
  width: 2.1rem;
  height: auto;
  opacity: 0.9;
  &:hover {opacity: 0.5;}
  ${props => props.dark && `filter: invert(100%);`}
  ${(props) => props.disabled && `cursor: not-allowed;`}
`;
