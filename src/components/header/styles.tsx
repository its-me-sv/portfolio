import styled from "styled-components";
import menuIcon from "../../assets/icons/menu.png";

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
  color: #1a1a1a;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.12rem;
  word-spacing: 0.24rem;
  &:hover {
    opacity: 0.7;
    font-weight: 100;
  }
`;

export const CurrentPage = styled.span`
  font-family: calibri;
  color: #1a1a1a;
  font-size: 1.8rem;
`;

export const MenuIcon = styled.img.attrs({
  src: menuIcon,
  alt: "menu icon",
})`
  width: 1.6rem;
  height: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
