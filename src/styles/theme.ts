import { DefaultTheme } from 'styled-components';
const breakpoints = {
  phone: 375,
  bigPhone: 400,
  tablet: 768,
  tabletLandscape: 1024,
  laptop: 1280,
  desktop: 1440,
  wide: 1600,
  fullHd: 1920,
};
const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
  },
  sizes: {
    containerMaxWidth: 922,
    mobileHorizontalSpacing: 22,
  },
  fonts: {
    gotham: `'Gotham A', 'Gotham B', arial, sans-serif`,
  },
  breakpoints,
  mq: {
    phone: `@media (min-width: ${breakpoints.phone}px)`,
    bigPhone: `@media (min-width: ${breakpoints.bigPhone}px)`,
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    untilTablet: `@media (max-width: ${breakpoints.tablet - 1}px)`,
    tabletLandscape: `@media (min-width: ${breakpoints.tabletLandscape}px)`,
    untilTabletLandscape: `@media (max-width: ${
      breakpoints.tabletLandscape - 1
    }px)`,
    laptop: `@media (min-width: ${breakpoints.laptop}px)`,
    untilLaptop: `@media (max-width: ${breakpoints.laptop - 1}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
    wide: `@media (min-width: ${breakpoints.wide}px)`,
    fullHd: `@media (min-width: ${breakpoints.fullHd}px)`,
  },
};
export default theme;
