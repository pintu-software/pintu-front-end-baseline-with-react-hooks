import MainFont from './assets/Montserrat-Regular.ttf';
import SemiBoldFont from './assets/Montserrat-SemiBold.ttf';
import LightFont from './assets/Montserrat-Light.otf';
import MediumFont from './assets/Montserrat-Medium.otf';
import ArialMainFont from './assets/Arial-Rounded-Bold.ttf';

export const fontFamily = {
  main: {
    name: 'Montserrat-Regular',
    url: MainFont,
  },
  bold: {
    name: 'Montserrat-SemiBold',
    url: SemiBoldFont,
  },
  medium: {
    name: 'Montserrat-Medium',
    url: MediumFont,
  },
  light: {
    name: 'Montserrat-Light',
    url: LightFont,
  },
  secondary: {
    name: 'Arial-Rounded-Bold',
    url: ArialMainFont,
  },
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

export default {
  fontFamily,
  fontSize,
};
