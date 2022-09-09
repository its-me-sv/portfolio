import styled from 'styled-components';
import { FadeAnim1 } from '../../utils/styles.util';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 16rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.42rem;
  justify-content: space-around;
  padding: 0.42% 0;
  a {all: unset;}
  animation: ${FadeAnim1} 1s;
  ${props => props.theme.boxShadow}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
    width: 10rem;
    height: 18rem;
    padding-bottom: 1rem;
  }
`;

export const Company = styled.img`
  width: 7rem;
  height: auto;
  border-radius: 0.42rem;
`;

export const Name = styled.span`
  font-family: roboto;
  font-size: 1.2rem;
  color: ${props => props.theme.fontColor};
`;

export const Username = styled.span`
  font-family: bahnschrift;
  font-size: 1.1rem;
  color: ${props => props.theme.fontColor};
`;