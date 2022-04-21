import {createTheme} from '@shopify/restyle';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {Dimensions, Platform} from 'react-native';

const palette = {
  MarineBlue: '#05415F',
};

const theme = createTheme({
  colors: {
    primary: palette.MarineBlue,

    ...palette,
  },
  spacing: {
    nil: 0,
    0: moderateScale(2, 0.5),
    1: moderateScale(4, 0.5),
    2: moderateScale(6, 0.5),
    3: moderateScale(8, 0.5),
    4: moderateScale(10, 0.5),
    5: moderateScale(12, 0.5),
    6: moderateScale(14, 0.5),
    7: moderateScale(16, 0.5),
    8: moderateScale(18, 0.5),
    9: moderateScale(20, 0.5),
    10: moderateScale(22, 0.5),
    11: moderateScale(24, 0.5),
    12: moderateScale(26, 0.5),
    13: moderateScale(28, 0.5),
    14: moderateScale(30, 0.5),
    15: moderateScale(32, 0.5),
    16: moderateScale(34, 0.5),
    17: moderateScale(36, 0.5),
    18: moderateScale(38, 0.5),
    19: moderateScale(40, 0.5),
    20: moderateScale(42, 0.5),
    xl: moderateScale(64, 0.5),
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },

  textVariants: {
    default: {
      fontFamily: 'SFProText-Bold',
      fontSize: moderateScale(32),
      lineHeight: moderateScale(44),
    },
  },

  buttonVariants: {
    default: {
      padding: 4,
      borderRadius: moderateScale(8),
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export type Theme = typeof theme;
export default theme;