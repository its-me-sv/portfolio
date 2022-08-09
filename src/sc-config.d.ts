import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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