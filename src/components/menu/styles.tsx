import styled from "styled-components";
import { FadeAnim } from "../../utils/animation.util";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.21rem 0.49rem 0rem 0rem;
  flex-direction: column;
  align-items: flex-end;
  font-family: geomanist;
  font-size: 1.6rem;
  gap: 0.36rem;
`;

export const MenuIcon = styled.img.attrs({ alt: "" })<{dark?: boolean}>`
  width: 1.6rem;
  height: auto;
  cursor: pointer;
  animation: ${FadeAnim} 1s;
  &:hover {
    opacity: 0.5;
  }
  ${props => props.dark && `filter: invert(100%);`}
`;

export const MenuItem = styled.p<{ chosen: boolean, dark?: boolean }>`
  all: unset;
  cursor: pointer;
  ${(props) => !props.chosen && "opacity: 0.6;"}
  animation: ${FadeAnim} 1s;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
  ${(props) =>
    props.chosen &&
    `
    font-weight: bold;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-image: linear-gradient(135deg,#0e73cc 1.93%,#624bbb 14.86%,
      #ff455d 48.09%,#f35815 77.82%,#f2b600 97.3%);
  `}
  &:hover {
    text-decoration: underline;
  }
`;
