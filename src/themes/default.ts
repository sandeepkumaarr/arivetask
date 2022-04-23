import {createTheme} from '@shopify/restyle';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const palette = {
  cyanBlue: '#7fa2bb',
  WhiteSmoke: '#f5f5f5',
  grey: '#8a8a8a',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    primary: palette.WhiteSmoke,
    secondary: palette.cyanBlue,
    buttonText: palette.white,
    buttonText_off: palette.black,
    product_name: palette.grey,
    product_desc: palette.black,
    header: palette.cyanBlue,
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
    tablet: 768,
  },

  buttonVariants: {
    defaults: {},
    subcategory: {
      borderRadius: moderateScale(10),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 4,
    },
  },
  textVariants: {
    default: {},
    button: {
      fontSize: moderateScale(16),
      color: 'buttonText',
      fontWeight: '600',
      fontFamily: 'SFProText-Bold',
    },

    buttonoff: {
      fontSize: moderateScale(16),
      color: 'buttonText_off',
      fontWeight: '600',
      fontFamily: 'SFProText-Bold',
    },

    bannerHeader: {
      color: 'buttonText',
      fontSize: moderateScale(36),
      fontWeight: 'bold',
      textAlign: 'center',
    },
    bannerHeader_small: {
      color: 'buttonText',
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      textAlign: 'center',
    },
    ProductName: {
      fontSize: moderateScale(15),
      color: 'product_name',
      fontWeight: '800',
      fontFamily: 'SFProText-Bold',
    },

    ProductDescription: {
      fontSize: moderateScale(16),
      color: 'product_desc',
      fontWeight: '600',
      fontFamily: 'SFProText-Bold',
    },
    price: {
      fontSize: moderateScale(16),
      color: 'product_desc',
      fontWeight: '800',
      fontFamily: 'SFProText-Bold',
    },
    header: {
      color: 'header',
      fontSize: moderateScale(28),
      fontWeight: 'bold',
      textAlign: 'center',
      fontStyle: 'italic',
    },
  },
  BannerVariants: {
    default: {},
    categoryCard: {
      height: Math.round(moderateVerticalScale(200)),
    },
    CategoryHome: {
      height: Math.round(moderateVerticalScale(150)),
      shadowColor: 'header',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.3,
      elevation: 2,
    },
  },
  ProductCardVariants: {
    default: {},
  },
});

export type Theme = typeof theme;
export default theme;
