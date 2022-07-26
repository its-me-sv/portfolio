import styled from 'styled-components';
import { LightBoxShadow, FadeAnim1, DarkBoxShadow } from '../../utils/styles.util';

export const Card = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${FadeAnim1} 1s;
  gap: 0.21rem;
  span {
    font-family: montserrat;
    font-size: 2.1rem;
    opacity: 0.84;
    color: #1a1a1a;
    ${props => props.dark && `color: #f5f4f9;`}
  }
  div {
    animation: ${FadeAnim1} 1s;
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 0.42rem;
    padding: 0.28rem 0.3rem;
    border-radius: 0.3rem;
    ${LightBoxShadow}
    ${(props) => props.dark && `${DarkBoxShadow}`}
    span {
      font-family: arial;
      font-size: 1.2rem;
      color: #1a1a1a;
      ${props => props.dark && `color: #f5f4f9;`}
    }
    img {
      width: 1.4rem;
      height: auto;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
