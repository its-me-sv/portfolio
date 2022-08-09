import styled from "styled-components";
import { FadeAnim1 } from '../../utils/styles.util';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  overflow: auto;
  padding: 2.1% 0 3% 3%;
  animation: ${FadeAnim1} 1s;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.07rem;
`;

export const SubHeader = styled.span`
  font-family: roboto;
  font-size: 1.8rem;
  opacity: 0.7;
  text-decoration: underline;
  animation: ${FadeAnim1} 1s;
  color: ${props => props.theme.fontColor};
`;

export const Content = styled.span`
  max-width: 42rem;
  font-family: geomanist;
  font-size: 1.4rem;
  opacity: 0.9;
  text-align: center;
  animation: ${FadeAnim1} 1s;
  color: ${props => props.theme.fontColor};
`;
