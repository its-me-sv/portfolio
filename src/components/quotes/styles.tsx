import styled from 'styled-components';
import { FadeAnim1 } from '../../utils/styles.util';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${FadeAnim1} 1s;
  gap: 0.14rem;
  span {
    font-family: ${props => props.theme.fontFamily};;
    font-size: 1.4rem;
    opacity: 0.84;
    text-align: center;
    color: ${(props) => props.theme.fontColor};
  }
  div {
    animation: ${FadeAnim1} 1s;
    align-self: flex-end;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.14rem;
    padding: 0.15rem 0.2rem;
    border-radius: 0.14rem;
    span {
      font-family: ${props => props.theme.fontFamily};;
      font-size: 1.2rem;
      color: ${(props) => props.theme.fontColor};
    }
  }
`;
