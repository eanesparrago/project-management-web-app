import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: {
        base: string;
      };
      white: string;
    };
  }
}
