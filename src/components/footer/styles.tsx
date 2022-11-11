import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0.12rem 0.49rem 0.12rem 0.49rem;
  span {
    cursor: pointer;
    margin-right: 0.42rem;
  }
  span:hover {
    opacity: 0.7;
  }
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-end;
    gap: 0.42rem;
    /* position: absolute; */
    /* bottom: 0; */
  }
`;

export const CreditText = styled.div<{ open: boolean }>`
  font-family: core-sans-g;
  font-size: 1rem;
  animation: ${FadeAnim1} 1s;
  opacity: 0.84;
  color: ${(props) => props.theme.fontColor};
  span {
    color: rgb(254 67 101);
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(42, 143, 189);
    margin-left: 0.5ch;
    opacity: 1;
    ${props => props.theme.boxShadow}
    border-radius: 0.14rem;
    padding: 0rem 0.12rem 0.05rem 0.12rem;
  }
  a:hover {
    text-decoration: underline;
  }
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${(props) => props.open && `color: ${props.theme.backgroundColor};`}
  }
`;

export const SelectLang = styled.select`
  border-radius: 0.14rem;
  ${(props) => props.theme.boxShadow}
  z-index: 998;
  font-size: 1rem;
  font-family: core-sans-g;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  animation: ${FadeAnim1} 1s;
  text-align: center;
  cursor: pointer;
  opacity: 0.84;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  z-index: 998;
`;

export const ThemeIcon = styled.div<{dark: boolean}>`
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
  z-index: 998;
  padding: 0.12rem 0.2rem;
  ${props => props.theme.boxShadow}
  img {
    width: 1.4rem;
    height: auto;
    ${props => props.dark && `filter: invert(100%);`}
  }
`;
