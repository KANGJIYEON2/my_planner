import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;
    color: {
      main: string;
      second: string;
      third: string;
      fourth: string;
    };
  }
}
