import styled from "styled-components";
import { FadeAnim1, LightBoxShadow, DarkBoxShadow } from '../../utils/styles.util';

export const Card = styled.div<{dark: boolean; mobile: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.42% 0.84%;
  border-radius: 0.42rem;
  gap: 0.42rem;
  animation: ${FadeAnim1} 1s;
  img {
    width: 2.4rem;
    height: auto;
    &:hover {opacity: 0.5};
    ${props => props.dark && `filter: invert(100%);`}
  }
  ${LightBoxShadow}
  ${props => props.dark && DarkBoxShadow}
  ${props => props.mobile && `padding: 0.5% 0.7rem`}
`;

export const Name = styled.span<{dark: boolean}>`
  font-family: geomanist;
  font-size: 2.4rem;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;
