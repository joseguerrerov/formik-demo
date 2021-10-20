import 'styled-components';
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    colors: {
      white: string;
    };
    sizes: {
      containerMaxWidth: number;
      mobileHorizontalSpacing: number;
    };
    fonts: {
      gotham: string;
    };
    breakpoints: {
      phone: number;
      bigPhone: number;
      tablet: number;
      tabletLandscape: number;
      laptop: number;
      desktop: number;
      wide: number;
      fullHd: number;
    };
    mq: {
      phone: string;
      bigPhone: string;
      tablet: string;
      untilTablet: string;
      tabletLandscape: string;
      untilTabletLandscape: string;
      laptop: string;
      untilLaptop: string;
      desktop: string;
      wide: string;
      fullHd: string;
    };
  }
}
