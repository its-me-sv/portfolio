import styled from 'styled-components';
import { FadeAnim1 } from '../../utils/styles.util';
import likeIcon from '../../assets/icons/like.png';
import likeIconUnfilled from '../../assets/icons/like-unfilled.png';

export const Container = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2.4rem;
  place-items: center;
  padding: 1.4% 0%;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1.2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24vw;
  height: 60vh;
  gap: 0.42rem;
  padding: 1% 1.6%;
  border-radius: 0.42rem;
  animation: ${FadeAnim1} 1s;
  ${props => props.theme.boxShadow}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    width: 84vw;
  }
`;

export const CardTop = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span {
    font-family: geomanist;
    font-size: 1.6rem;
    color: ${props => props.theme.fontColor};
  }
  a {all:unset;}
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.42rem;
    img {
      cursor: pointer;
      width: 2.1rem;
      height: auto;
      opacity: 0.8;
      &:hover {opacity: 0.5;}
      ${props => props.dark && `filter: invert(100%);`}
    }
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
  img {
    width: 98%;
    height: 24vh;
    border-radius: 0.3rem;
  }
  div {
    display: flex;
    align-items: center;
    align-self: center;
    gap: 0.3rem;
  }
`;

export const SliderItem = styled.span<{selected: boolean}>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.backgroundColor};
  ${props => props.selected && `background-color: ${props.theme.borderColor};`}
`;

export const Description = styled.div`
  font-family: arial;
  font-size: 1.2rem;
  max-height: 24vh;
  overflow: auto;
  color: ${props => props.theme.fontColor};
`;

export const TechStack = styled.span`
  font-family: bahnschrift;
  font-size: 1rem;
  opacity: 0.9;
  max-height: 7vh;
  overflow: auto;
  animation: ${FadeAnim1} 1s;
  color: ${props => props.theme.fontColor};
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const LikeIcon = styled.img.attrs(
  (props: { liked: boolean; disabled: boolean }) => ({
    src: props.liked ? likeIcon : likeIconUnfilled,
    alt: "like",
  })
)<{ dark: boolean; liked: boolean; disabled: boolean; }>`
  width: 2.1rem;
  height: auto;
  opacity: 0.9;
  &:hover {
    opacity: 0.5;
  }
  ${(props) => props.dark && !props.liked && `filter: invert(100%);`}
  ${(props) => props.disabled && `cursor: not-allowed;`}
`;

export const LoadMore = styled.span`
  align-self: center;
  margin-bottom: 0.42rem;
  border-radius: 0.21rem;
  padding: 0.3rem;
  padding-top: 0rem;
  padding-bottom: 0.14rem;
  cursor: pointer;
  color: ${props => props.theme.fontColor};
  ${props => props.theme.boxShadow}
`;
