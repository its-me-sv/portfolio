import styled from 'styled-components';
import {
  LightBoxShadowNoHover,
  LightBoxShadowHover,
  FadeAnim1,
  DarkBoxShadowNoHover,
  DarkBoxShadowHover,
} from "../../utils/styles.util";
import searchPng from '../../assets/icons/search.png';
import closePng from '../../assets/icons/close.png';

export const SearchContainer = styled.div<{dark: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  gap: 0.42rem;
  width: 42vw;
  border-radius: 0.3rem;
  padding: 0.21% 0.49%;
  margin: 0 auto;
  padding: 0.36%;
  animation: ${FadeAnim1} 1s;
  background-color: #f5f4f9;
  ${LightBoxShadowNoHover}
  ${props => props.dark && `
    background-color: #1a1a1a;
    ${DarkBoxShadowNoHover}
  `}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    width: 90vw;
    padding: 1%;
  }
`;

export const SearchIcon = styled.img.attrs({
  src: searchPng,
  alt: ''
})<{dark: boolean}>`
  width: 1.6rem;
  height: auto;
  opacity: 0.84;
  ${props => props.dark && `filter: invert(100%);`}
`;

export const SearchInput = styled.input<{dark: boolean}>`
  font-family: geomanist;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 0.42rem;
  font-size: 1.4rem;
  width: 100%;
  color: #1a1a1a;
  &:focus {${LightBoxShadowHover}}
  ${props => props.dark && `
    color: #f5f4f9;
    background-color: rgb(45, 43, 43);
    &:focus {${DarkBoxShadowHover}}
  `}
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    height: 2.1rem;
  }
`;

export const CloseIcon = styled.img.attrs({
  src: closePng,
  alt: "",
})<{dark: boolean}>`
  width: 0.84rem;
  height: auto;
  cursor: pointer;
  &:hover { opacity: 0.7; }
  ${props => props.dark && `filter: invert(100%);`}
`;
