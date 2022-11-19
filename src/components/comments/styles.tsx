import styled from "styled-components";
import { FadeAnim1 } from '../../utils/styles.util';

export const CommentsTitle = styled.span`
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1.6rem;
  animation: ${FadeAnim1} 1s;
  color: ${props => props.theme.fontColor};
`;

export const Body = styled.div`
  margin-top: 0.42rem;
  height: 77vh;
  padding: 0.14rem 0.42rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.14rem;
  overflow: auto;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
  gap: 0.14rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
  textarea,
  textarea::placeholder {
    resize: none;
    outline: none;
    border: none;
    font-family: ${props => props.theme.fontFamily};;
    border-radius: 0.14rem;
    font-size: 1.2rem;
    padding-left: 0.28rem;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.cmntsBgClr};
    &:focus {
      ${(props) => props.theme.boxShadowHover}
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  animation: ${FadeAnim1} 0.42s;
  gap: 0.3rem;
  img {
    width: 1.6rem;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 0.14rem;
    border-radius: 0.14rem;
    width: 100%;
    background-color: ${(props) => props.theme.cmntBgClr};
  }
  span {
    font-family: ${props => props.theme.fontFamily};;
    font-size: 1.2rem;
    max-height: 14vh;
    overflow: auto;
    color: ${(props) => props.theme.fontColor};
    &:first-child {
      align-self: flex-end;
      font-family: ${props => props.theme.fontFamily};;
      opacity: 0.84;
      font-size: 1rem;
    }
  }
`;

export const LoadMore = styled.span`
  align-self: center;
  margin-bottom: 0.42rem;
  border-radius: 0.21.2rem;
  padding: 0.3rem;
  padding-top: 0rem;
  padding-bottom: 0.14rem;
  cursor: pointer;
  color: ${props => props.theme.fontColor};
  ${props => props.theme.boxShadow}
`;

export const BinIcon = styled.p`
  all: unset;
  align-self: flex-end;
  font-family: ${props => props.theme.fontFamily};;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0.7;
  &:hover {opacity: 1;}
`;
