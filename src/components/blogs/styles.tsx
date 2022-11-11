import styled from "styled-components";
import { FadeAnim1 } from '../../utils/styles.util';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.42% 0.84%;
  border-radius: 0.14rem;
  gap: 0.14rem;
  a {
    all:unset;
    cursor: pointer;
  }
  animation: ${FadeAnim1} 1s;
  ${props => props.theme.boxShadow}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0.7rem;
  }
`;

export const Name = styled.span`
  font-family: core-sans-g;
  font-size: 1.4rem;
  color: ${(props) => props.theme.fontColor};
`;
