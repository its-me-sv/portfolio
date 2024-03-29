import styled from "styled-components";
import { FadeAnim1 } from '../../utils/styles.util';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow: auto;
  padding: 2.1% 0 3% 3%;
  animation: ${FadeAnim1} 1s;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 7%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.07rem;
`;

export const SubHeader = styled.span`
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.6rem;
  opacity: 0.7;
  text-decoration: underline;
  animation: ${FadeAnim1} 1s;
  color: ${(props) => props.theme.fontColor};
`;

export const Content = styled.span`
  max-width: 42rem;
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.4rem;
  opacity: 0.9;
  text-align: center;
  animation: ${FadeAnim1} 1s;
  color: ${(props) => props.theme.fontColor};
`;
