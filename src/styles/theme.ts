import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  breakpoint: {
    phone: '37.5em', // 600px
    tabletPortrait: '56.25em', // 900px
    tabletLandscape: '75em', // 1200px
    desktopM: '93.75em', // 1500px
    desktopL: '112.5em', // 1800px
    desktopXL: '125em', // 2000px
  },
  color: {
    primary: {
      base: '#40a9ff',
    },
    white: '#FFFFFF',
    grey: {
      light: '#f5f5f5',
      medium: '#d9d9d9',
      dark: '#8c8c8c',
    },
    green: {
      primary: '#73d13d',
    },
  },
  boxShadow: {
    1: 'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
    2: 'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
  },
  borderRadius: {
    s: '8px',
  },
}

export default theme
