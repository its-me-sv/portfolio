import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    fontColor: string;
    backgroundColor: string;
    boxShadow: string;
    boxShadowNoHover: string;
    boxShadowHover: string;
    cmntsBgClr: string;
    cmntBgClr: string;
    borderColor: string;
    scrollBarBg: string;
    overviewBg: string;
    contentColor: string;
  }
}