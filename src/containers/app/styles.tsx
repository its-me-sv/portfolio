import styled from "styled-components";
import { FadeAnim1 } from "../../utils/animation.util";

export const AppContainer = styled.div<{ dark?: boolean }>`
  display: grid;
  grid-template-rows: 1fr 20fr;
  width: 100vw;
  height: 100vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #f5f4f9;
  ${(props) =>
    props.dark &&
    `
    background-color: #1a1a1a;
  `}
  animation: ${FadeAnim1} 1s;
`;
