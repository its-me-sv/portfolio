import styled from 'styled-components';
import { 
  FadeAnim1, 
  LightBoxShadow,
  DarkBoxShadow
} from '../../utils/styles.util';
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

export const Card = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24vw;
  height: 60vh;
  gap: 0.42rem;
  padding: 1% 1.6%;
  border-radius: 0.42rem;
  animation: ${FadeAnim1} 1s;
  ${LightBoxShadow};
  ${props => props.dark && DarkBoxShadow}
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
    color: #1a1a1a;
    ${props => props.dark && `color: #f5f4f9`}
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

export const Gallery = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
  img {
    width: 98%;
    height: 24vh;
    border-radius: 0.3rem;
    /* animation: ${FadeAnim1} 1s; */
    /* border: 1px solid #1a1a1a; */
    /* ${(props) => props.dark && `border: 1px solid #f5f4f9;`} */
  }
  div {
    display: flex;
    align-items: center;
    align-self: center;
    gap: 0.3rem;
  }
`;

export const SliderItem = styled.span<{selected: boolean; dark: boolean}>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #1a1a1a;
  ${props => props.selected && `background-color: #1a1a1a;`}
  ${props => props.dark && `
    border: 1px solid #f5f4f9;
    ${props.selected && `background-color: #f5f4f9;`}
  `}
`;

export const Description = styled.div<{dark: boolean}>`
  font-family: arial;
  font-size: 1.2rem;
  max-height: 24vh;
  overflow: auto;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const TechStack = styled.span<{dark: boolean}>`
  font-family: bahnschrift;
  font-size: 1rem;
  opacity: 0.9;
  max-height: 7vh;
  overflow: auto;
  animation: ${FadeAnim1} 1s;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
`;

export const CardBottom = styled.div<{dark: boolean}>`
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
      color: #1a1a1a;
      ${props => props.dark && `color: #f5f4f9;`}
    }
  }
`;

export const LikeIcon = styled.img.attrs((props: { liked: boolean }) => ({
  src: props.liked ? likeIcon : likeIconUnfilled,
  alt: "like",
}))<{ dark: boolean; liked: boolean }>`
  width: 2.1rem;
  height: auto;
  opacity: 0.9;
  &:hover {opacity: 0.5;}
  ${(props) => props.dark && !props.liked && `filter: invert(100%);`}
`;

export const LoadMore = styled.span<{dark: boolean}>`
  align-self: center;
  margin-bottom: 0.42rem;
  border-radius: 0.21rem;
  padding: 0.3rem;
  padding-top: 0rem;
  padding-bottom: 0.14rem;
  cursor: pointer;
  color: #1a1a1a;
  ${LightBoxShadow}
  ${props => props.dark && `
    color: #f5f4f9;
    ${DarkBoxShadow}
  `}
`;

