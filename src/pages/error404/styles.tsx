import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  span {
    animation: ${FadeAnim1} 1s;
    font-family: core-sans-g;
    font-size: 4.2rem;
    text-align: center;
    &:last-child {
      font-size: 2.1.2rem;
    }
  }
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;
