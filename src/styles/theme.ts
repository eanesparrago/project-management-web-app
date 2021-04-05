import { DefaultTheme } from "styled-components";
import { blue } from "@ant-design/colors";

const theme: DefaultTheme = {
  breakpoint: {
    phone: "37.5em", // 600px
    tabletPortrait: "56.25em", // 900px
    tabletLandscape: "75em", // 1200px
    desktopM: "93.75em", // 1500px
    desktopL: "112.5em", // 1800px
    desktopXL: "125em", // 2000px
  },
  color: {
    primary: {
      base: blue.primary as string,
    },
    white: "#FFFFFF",
  },
};

export default theme;
