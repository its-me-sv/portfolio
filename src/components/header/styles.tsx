import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0vw 0.49rem 0vw 0.49rem;
`;

export const Signature = styled.span`
  font-family: signature;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  color: ${props => props.theme.fontColor};
  &:hover {
    opacity: 0.7;
    font-weight: 100;
  }
`;

export const CurrentPage = styled.span`
  font-family: core-sans-g;
  color: ${(props) => props.theme.fontColor};
  font-size: 1.8rem;
  animation: ${FadeAnim1} 1s;
  text-transform: capitalize;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.3rem 0 0 0.3rem;
  }
`;
