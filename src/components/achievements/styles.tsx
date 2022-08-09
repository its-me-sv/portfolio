import styled from "styled-components";
import { FadeAnim1 } from "../../utils/styles.util";
import clap from '../../assets/icons/clap.png';
import clapUnfilled from '../../assets/icons/clap-unfilled.png';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.42% 0.84%;
  border-radius: 0.42rem;
  gap: 0.42rem;
  animation: ${FadeAnim1} 1s;
  ${props => props.theme.boxShadow}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 0.5% 0.7rem;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-family: geomanist;
  font-size: 1.8rem;
  color: ${props => props.theme.fontColor};
`;

export const Description = styled.span`
  font-family: arial;
  font-size: 1.2rem;
  color: ${props => props.theme.fontColor};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.42rem;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.3rem;
    &:hover {opacity: 0.5;}
    span {
      font-family: arial;
      font-size: 1.2rem;
      color: ${props => props.theme.fontColor};
    }
  }
`;

export const ClapIcon = styled.img.attrs((props: { liked: boolean }) => ({
  src: props.liked ? clap : clapUnfilled,
  alt: "clap",
}))<{ dark: boolean; liked: boolean }>`
  width: 2.1rem;
  height: auto;
  opacity: 0.9;
  &:hover {opacity: 0.5;}
  ${props => (props.dark && !props.liked) && `filter: invert(100%);`}
`;
