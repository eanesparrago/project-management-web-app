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
      grey: {
        light: string;
        medium: string;
      };
      green: {
        primary: string;
      };
    };
    boxShadow: {
      1: string;
      2: string;
    };
    borderRadius: {
      s: string;
    };
  }
}
