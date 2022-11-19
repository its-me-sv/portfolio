import styled from 'styled-components';
import { FadeAnim1 } from '../../utils/styles.util';

export const Container = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 22rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.14rem;
  justify-content: space-around;
  padding: 0.42% 0;
  animation: ${FadeAnim1} 1s;
  ${props => props.theme.boxShadowNoHover}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1.2rem;
    width: 10rem;
    height: 24rem;
    padding-bottom: 1.2rem;
  }
`;

export const Provider = styled.img`
  width: 7rem;
  height: auto;
  border-radius: 0.14rem;
`;

export const Name = styled.span`
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.4rem;
  color: ${(props) => props.theme.fontColor};
`;

export const Issued = styled.span`
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.2rem;
  color: ${(props) => props.theme.fontColor};
`;
