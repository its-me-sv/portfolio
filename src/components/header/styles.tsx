import styled from "styled-components";
import { FadeAnim1 } from "../../utils/animation.util";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0vw 0.49rem 0vw 0.49rem;
`;

export const Signature = styled.span<{dark?: boolean}>`
  font-family: signature;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.12rem;
  word-spacing: 0.24rem;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
  &:hover {
    opacity: 0.7;
    font-weight: 100;
  }
`;

export const CurrentPage = styled.span<{dark?: boolean}>`
  font-family: calibri;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
  font-size: 1.8rem;
  animation: ${FadeAnim1} 1s;
  text-transform: capitalize;
`;
