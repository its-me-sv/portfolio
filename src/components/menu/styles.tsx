import styled, {keyframes} from "styled-components";

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
`;

export const MenuIcon = styled.img.attrs({alt: ""})`
  width: 1.6rem;
  height: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ItemAnim = keyframes`
  from {opacity: 0;}
  to {opacity: 0.6;}
`;

export const MenuItem = styled.span<{chosen: boolean}>`
  ${(props) => !props.chosen && 'opacity: 0.6;'}
  ${(props) => props.chosen && 'text-decoration: underline;'}
  animation: ${ItemAnim} 1s;
`;
