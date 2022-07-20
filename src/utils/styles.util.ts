import { keyframes, css } from "styled-components";

export const FadeAnim = keyframes`
  from {opacity: 0;}
  to {opacity: 0.6;}
`;

export const FadeAnim1 = keyframes`
  from {opacity: 0;}
  to {opacity: 0.6;}
`;

export const LightBoxShadow = css`
  box-shadow: rgb(0 0 0 / 70%) 1px 1px 6px 1px;
  &:hover {
    box-shadow: rgb(0 0 0 / 70%) 0px 0px 3px 1px inset;
  }
`;

export const DarkBoxShadow = css`
  box-shadow: rgb(245 244 249 / 70%) 1px 1px 6px 1px;
  &:hover {
    box-shadow: rgb(245 244 249 / 70%) 0px 0px 3px 1px inset;
  }
`;
