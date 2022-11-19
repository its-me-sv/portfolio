import styled from "styled-components";
import { FadeAnim } from "../../utils/styles.util";

export const Container = styled.div<{ open: boolean }>`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-end;
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.6rem;
  padding-left: 1.4rem;
  padding: 0 0.49rem;
  z-index: 997;
  gap: 0.36rem;
  ${(props) =>
    props.open &&
    `
    padding: 0.49rem;
    border-radius: 0rem 0 0 0.42rem;
    background-color: ${props.theme.fontColor};
  `}
  /* desktop styles */
  @media only screen and (min-width: 768px) {
    padding-top: 0.28rem;
  }
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    margin-right: 0;
    padding: 0.42rem;
    padding-left: 1.4rem;
    margin-top: 0;
    /* height: 90.4vh; */
    border-top-left-radius: 0.42rem;
    /* height: 100%; */
    /* overflow: auto; */
  }
`;

export const MenuIcon = styled.img.attrs({ alt: "menu" })<{
  dark?: boolean;
  open: boolean;
}>`
  width: 1.4rem;
  height: auto;
  cursor: pointer;
  animation: ${FadeAnim} 1s;
  &:hover {
    opacity: 0.5;
  }
  ${(props) => props.dark && `filter: invert(100%);`}
  ${(props) => props.open && `filter: unset;`}
  ${(props) => !props.dark && props.open && `filter: invert(100%);`}
  ${(props) => props.theme.boxShadowNoHover}
  border-radius: 0.12rem;
  padding: 0.05rem 0.12rem;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    width: 1.8rem;
  }
`;

export const MenuItem = styled.p<{chosen: boolean;}>`
  all: unset;
  cursor: pointer;
  ${props => !props.chosen && "opacity: 0.6;"}
  animation: ${FadeAnim} 1s;
  color: ${props => props.theme.backgroundColor};
  ${props => props.chosen && `
    font-weight: bold;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-image: linear-gradient(135deg,#0e73cc 1.93%,#624bbb 14.86%,
      #ff455d 48.09%,#f35815 77.82%,#f2b600 97.3%);
  `}
  a {all: unset;}
  &:hover {
    text-decoration: underline;
  }
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
