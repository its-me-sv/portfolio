import styled from "styled-components";
import { FadeAnim1 } from '../../utils/styles.util';

export const Container = styled.div<{mobile: boolean}>`
  animation: ${FadeAnim1} 1s;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  img {
    width: 7rem;
    height: auto;
  }
  margin: auto;
  gap: 2.1rem;
  ${props => props.mobile && `
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    img {
      width: 5.6rem;
      height: auto;
    }
  `}
`;
