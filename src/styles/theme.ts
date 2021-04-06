import { DefaultTheme } from "styled-components";
import { blue, grey } from "@ant-design/colors";

console.log("grey", grey);

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
    grey: grey[0] as string,
  },
};

export default theme;
