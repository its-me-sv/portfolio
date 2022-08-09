import styled from "styled-components";
import { FadeAnim1 } from '../../utils/styles.util';

export const Card = styled.div`
  display: grid;
  padding: 0.42% 0.84%;
  border-radius: 0.42rem;
  gap: 0.42rem;
  a {
    all:unset;
    cursor: pointer;
  }
  animation: ${FadeAnim1} 1s;
  ${props => props.theme.boxShadow}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.5% 0.7rem
  }
`;

export const Name = styled.span`
  font-family: geomanist;
  font-size: 2.4rem;
  color: ${props => props.theme.fontColor};
`;
