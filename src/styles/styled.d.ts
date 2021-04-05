import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoint: {
      phone: string;
      tabletPortrait: string;
      tabletLandscape: string;
      desktopM: string;
      desktopL: string;
      desktopXL: string;
    };
    color: {
      primary: {
        base: string;
      };
      white: string;
    };
  }
}
