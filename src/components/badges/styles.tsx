import styled from "styled-components";
import {
  DarkBoxShadow,
  LightBoxShadow,
  FadeAnim1,
} from "../../utils/styles.util";

export const Container = styled.div<{ mobile: boolean }>`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
  ${(props) =>
    props.mobile &&
    `
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  `}
`;

export const Card = styled.div<{ dark: boolean; mobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 16rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.42rem;
  justify-content: space-around;
  padding: 0.42% 0;
  animation: ${FadeAnim1} 1s;
  a {all: unset;}
  ${LightBoxShadow}
  ${(props) => props.dark && `${DarkBoxShadow}`}
  ${(props) =>
    props.mobile &&
    `
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
    width: 10rem;
    height: 16rem;
    padding-bottom: 1rem;
  `}
`;

export const BadgeImg = styled.img`
  width: 7rem;
  height: auto;
  border-radius: 0.42rem;
`;

export const Issued = styled.span<{ dark: boolean }>`
  font-family: bahnschrift;
  font-size: 1.1rem;
  color: #1a1a1a;
  ${(props) => props.dark && `color: #f5f4f9;`}
`;
