import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 20fr;
  width: 100vw;
  height: 100vh;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  animation: ${FadeAnim1} 1s;
  background-color: ${props => props.theme.backgroundColor};
`;
