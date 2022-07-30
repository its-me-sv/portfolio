import styled from "styled-components";
import { FadeAnim1, LightBoxShadowNoHover, DarkBoxShadowNoHover } from "../../utils/styles.util";

export const Container = styled.div<{mobile: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;
  ${props => props.mobile && `
    padding: 1rem 2rem;
    gap: 2.1rem;
  `}
`;

export const Section = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem 1rem;
  border-radius: 0.42rem;
  ${LightBoxShadowNoHover}
  ${props => props.dark && DarkBoxShadowNoHover}
`;

export const SubSection = styled.div<{mobile: boolean}>`
  padding-top: 0.36rem;
  display: flex;
  align-items: center;
  gap: 2.1rem;
  ${props => props.mobile && `
    flex-direction: column;
    gap: 1.1rem;
  `}
`;

export const SectionTitle = styled.span<{dark: boolean}>`
  font-family: bahnschrift;
  font-size: 1.8rem;
  opacity: 0.7;
  text-decoration: underline;
  animation: ${FadeAnim1} 1s;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const SectionItem = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.07rem;
  span {
    font-family: roboto;
    font-size: 1.6rem;
    text-align: center;
    opacity: 0.8;
    animation: ${FadeAnim1} 1s;
    color: #1a1a1a;
    ${props => props.dark && `color: #f5f4f9;`}
    &:last-child {
      font-family: bahnschrift;
    }
  }
`;
