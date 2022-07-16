import styled, { keyframes } from 'styled-components';

export const Container = styled.div<{dark?: boolean}>`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #f5f4f9;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  ${(props) => props.dark && `
    background-color: #1a1a1a;
    color: #f5f4f9
  `}
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

export const SignatureFont = styled.span<{ dark?: boolean }>`
  font-family: signature;
  font-size: 12vh;
  animation: ${showHide} 2.1s ease-in-out infinite;
  color: #1a1a1a;
  ${(props) => props.dark && `
    color: #f5f4f9
  `}
`;
