import React from 'react';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  backgroundColor,
  BackgroundColorProps,
  useRestyle,
} from '@shopify/restyle';
import {ImageBackground, StyleSheet, ImageSourcePropType} from 'react-native';
import {Theme} from '../themes/default';
import Box from './Box';
import Text from './Text';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const BannerVariant = createVariant({themeKey: 'BannerVariants'});
const BannerContainer = createRestyleComponent<
  VariantProps<Theme, 'BannerVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([BannerVariant], Box);

const restyleFunctions = [BannerVariant as any, backgroundColor];

type Props = VariantProps<Theme, 'BannerVariants'> &
  BackgroundColorProps<Theme> & {
    bannerText: string;
    image: ImageSourcePropType;
  };

const Banner = ({bannerText, ...rest}: Props) => {
  const props = useRestyle([restyleFunctions], rest);
  const {image} = rest;

  return (
    <BannerContainer {...props}>
      <ImageBackground source={image} style={styles.image}>
        <Text variant={'bannerHeader'}>{bannerText}</Text>
      </ImageBackground>
    </BannerContainer>
  );
};

export default Banner;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: Math.round(moderateVerticalScale(220)),
    borderRadius: Math.round(moderateScale(20)),
    overflow: 'hidden',
  },
});
