import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  fontFamily: 'core-sans-g',
  fontColor: '#1a1a1a',
  backgroundColor: '#f5f4f9',
  boxShadow: `
    box-shadow: 0 0 20px #e2e8f0;
    background-color: #ffffff;
    &:hover {
      box-shadow: 0 0 20px #e2e8f0 inset;
    }
  `,
  boxShadowNoHover: `
    box-shadow: 0 0 20px #e2e8f0;
    background-color: #ffffff;
  `,
  boxShadowHover: `
    box-shadow: 0 0 20px #e2e8f0 inset;
  `,
  cmntsBgClr: '#e9e8ed',
  cmntBgClr: 'rgba(0, 0, 0, 0.1)',
  borderColor: '#1a1a1a',
  scrollBarBg: '#a7abb0',
  overviewBg: 'rgba(0, 0, 0, 0.5)',
  contentColor: 'rgba(0, 0, 0, 0.8)',
};

export const darkTheme: DefaultTheme = {
  fontFamily: 'core-sans-g',
  fontColor: '#f5f4f9',
  backgroundColor: '#1a1a1a',
  boxShadow: `
    box-shadow: rgb(245 244 249 / 70%) 1px 1px 4.2px 1px;
    background-color: #1a1a1a;
    &:hover {
      box-shadow: rgb(245 244 249 / 70%) 1px 1px 4.2px 1px inset;
    }
  `,
  boxShadowNoHover: `
    box-shadow: rgb(245 244 249 / 70%) 1px 1px 4.2px 1px;
  `,
  boxShadowHover: `
    box-shadow: rgb(245 244 249 / 70%) 1px 1px 4.2px 1px inset;
  `,
  cmntsBgClr: '#2c2c2b',
  cmntBgClr: 'rgba(255, 255, 255, 0.1)',
  borderColor: '#f5f4f9',
  scrollBarBg: '#1f2937',
  overviewBg: 'rgba(256, 256, 256, 0.5)',
  contentColor: 'rgba(255, 255, 255, 0.8)',
};
