import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
`;

const animeString: string = new Array(11)
  .fill(0)
  .map(
    (_, idx) =>
      `${idx}0% {
        opacity:0.${idx};
        overflow: hidden; 
        max-width: ${idx}ch;
        white-space: nowrap;
      }`
  ).join("\n");

const showHide = keyframes`${animeString}`;

export const SignatureFont = styled.span`
  font-family: signature;
  font-size: 12vh;
  animation: ${showHide} 2.1s ease-in-out infinite;
  color: ${(props) => props.theme.fontColor};
`;
