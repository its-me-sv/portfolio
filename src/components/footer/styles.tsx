import styled from "styled-components";
import { FadeAnim1 } from "../../utils/animation.util";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0vw 0.49rem 0.1rem 0.49rem;
`;

export const CreditText = styled.div`
  font-family: calibri;
  color: #1a1a1a;
  font-size: 1.4rem;
  animation: ${FadeAnim1} 1s;
  opacity: 0.84;
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
`;

export const SelectLang = styled.select`
  border-radius: 0.21rem;
  font-size: 1rem;
  font-family: bahnschrift;
  border: 1px solid black;
  outline: none;
  background-color: #f5f4f9;
  color: #1a1a1a;
  text-align: center;
  cursor: pointer;
  opacity: 0.84;
`;
