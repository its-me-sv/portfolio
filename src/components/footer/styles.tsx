import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";

export const Container = styled.div<{mobile: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0vw 0.49rem 0.1rem 0.49rem;
  span {
    cursor: pointer;
    margin-right: 0.42rem;
  }
  span:hover {
    opacity: 0.7;
  }
  ${props => props.mobile && `
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    position: absolute;
    bottom: 0;
  `}
`;

export const CreditText = styled.div<{
  dark?: boolean; 
  mobile: boolean;
  open: boolean;
}>`
  font-family: calibri;
  font-size: 1.4rem;
  animation: ${FadeAnim1} 1s;
  opacity: 0.84;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
  ${props => (props.mobile && props.open) 
    && `color: ${props.dark ? '#1a1a1a' : '#f5f4f9'};`
  }
  span {
    color: rgb(254 67 101);
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(42, 143, 189);
    margin-left: 0.5ch;
    opacity: 1;
  }
  a:hover {
    text-decoration: underline;
  }
  ${props => props.mobile && `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const SelectLang = styled.select<{
  dark?: boolean;
  mobile: boolean;
}>`
  border-radius: 0.21rem;
  font-size: 1rem;
  ${props => props.mobile && `font-size: 1.4rem;`}
  font-family: bahnschrift;
  border: 1px solid black;
  outline: none;
  background-color: #f5f4f9;
  color: #1a1a1a;
  ${props => props.dark && `
    background-color: #1a1a1a;
    color: #f5f4f9;
    border-color: #f5f4f9;
  `}
  animation: ${FadeAnim1} 1s;
  text-align: center;
  cursor: pointer;
  opacity: 0.84;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
`;
