import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontColor: string;
    backgroundColor: string;
    boxShadow: string;
    cmntsBgClr: string;
    cmntBgClr: string;
    borderColor: string;
    scrollBarBg: string;
    overviewBg: string;
  }
}