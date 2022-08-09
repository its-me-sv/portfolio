import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  span {
    animation: ${FadeAnim1} 1s;
    font-family: montserrat;
    font-size: 4.2rem;
    text-align: center;
    &:last-child {
      font-size: 2.1rem;
    }
  }
  background-color: #f5f4f9;
  color: #1a1a1a;
  ${(props) => props.dark && `
    background-color: #1a1a1a;
    color: #f5f4f9
  `}
`;
