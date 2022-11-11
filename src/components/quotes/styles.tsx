import styled from 'styled-components';
import heart from "../../assets/icons/heart.png";
import heartUnfilled from "../../assets/icons/heart-unfilled.png";
import { FadeAnim1 } from '../../utils/styles.util';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${FadeAnim1} 1s;
  gap: 0.14rem;
  span {
    font-family: core-sans-g;
    font-size: 1.4rem;
    opacity: 0.84;
    text-align: center;
    color: ${(props) => props.theme.fontColor};
  }
  div {
    animation: ${FadeAnim1} 1s;
    align-self: flex-end;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.14rem;
    padding: 0.15rem 0.2rem;
    border-radius: 0.14rem;
    span {
      font-family: core-sans-g;
      font-size: 1.2rem;
      color: ${(props) => props.theme.fontColor};
    }
  }
`;

export const HeartIcon = styled.img.attrs((props: { liked: boolean }) => ({
  src: props.liked ? heart : heartUnfilled,
  alt: "like",
}))<{ dark: boolean; liked: boolean; disabled?: boolean }>`
  width: 1.6rem;
  height: auto;
  &:hover {
    opacity: 0.5;
  }
  ${props => (props.dark && !props.liked) && `filter: invert(100%);`}
  ${props => props.disabled && `cursor: not-allowed;`}
`;
