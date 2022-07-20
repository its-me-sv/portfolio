import styled from 'styled-components';
import { DarkBoxShadow, LightBoxShadow, FadeAnim1 } from '../../utils/styles.util';

export const Container = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
`;

export const Card = styled.div<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 16rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.42rem;
  justify-content: space-evenly;
  padding: 0.42% 0;
  animation: ${FadeAnim1} 1s;
  ${LightBoxShadow}
  ${(props) => props.dark && `${DarkBoxShadow}`}
`;

export const Provider = styled.img`
  width: 7rem;
  height: auto;
  border-radius: 0.42rem;
`;

export const Name = styled.span<{dark: boolean}>`
  font-family: roboto;
  font-size: 1.2rem;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const Issued = styled.span<{dark: boolean}>`
  font-family: bahnschrift;
  font-size: 1.1rem;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const CredBtn = styled.div<{dark: boolean}>`
  font-family: geomanist;
  padding: 0.42% 3% 1.5% 3%;
  border-radius: 0.3rem;
  cursor: pointer;
  border: 2.1px solid #1a1a1a;
  background-color: #1a1a1a;
  color: #f5f4f9;
  &:hover {
    background-color: #f5f4f9;
    color: #1a1a1a;
    font-weight: bold;
  }
  ${props => props.dark && `
    border: 2.1px solid #f5f4f9;
    background-color: #f5f4f9;
    color: #1a1a1a;
    &:hover {
      background-color: #1a1a1a;
      color: #f5f4f9;
      font-weight: bold;
    }
  `}
`;
