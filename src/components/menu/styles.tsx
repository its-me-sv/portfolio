import styled from "styled-components";
import { FadeAnim } from "../../utils/animation.util";

export const Container = styled.div<{
  mobile: boolean;
  open: boolean;
  dark?: boolean;
}>`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-end;
  font-family: geomanist;
  font-size: 1.6rem;
  padding-left: 1.2rem;
  padding: 0 0.49rem;
  ${(props) => !props.mobile && "padding-top: 0.28rem;"}
  z-index: 998;
  gap: 0.36rem;
  ${(props) =>
    props.open &&
    `
    padding: 0.49rem;
    border-radius: 0rem 0 0 0.42rem;
    background-color: #1a1a1a;
    ${
      props.dark &&
      `
      background-color: #f5f4f9;
    `
    }
  `}
  ${(props) =>
    props.mobile &&
    `
    margin-right: 0;
    padding: 0.42rem;
    padding-left: 1.2rem;
    margin-top: 0;
    height: 98.1vh;
    border-top-left-radius: 0.42rem;
  `}
`;

export const MenuIcon = styled.img.attrs({ alt: "" })<{
  dark?: boolean;
  open: boolean;
  mobile: boolean;
}>`
  width: 1.6rem;
  height: auto;
  cursor: pointer;
  animation: ${FadeAnim} 1s;
  &:hover {
    opacity: 0.5;
  }
  ${(props) => props.dark && `filter: invert(100%);`}
  ${(props) => props.open && `filter: unset;`}
  ${(props) => !props.dark && props.open && `filter: invert(100%);`}
  ${(props) =>
    props.mobile &&
    `
    width: 1.8rem;
  `}
`;

export const MenuItem = styled.p<{
  chosen: boolean;
  dark?: boolean;
  mobile: boolean;
}>`
  all: unset;
  cursor: pointer;
  ${(props) => !props.chosen && "opacity: 0.6;"}
  animation: ${FadeAnim} 1s;
  color: #f5f4f9;
  padding-right: 0.36rem;
  ${(props) => props.dark && `color: #1a1a1a;`}
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
  /* font-size: 1.8rem; */
  ${(props) => props.mobile && "font-size: 2.1rem;"}
`;
