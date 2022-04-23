import React from 'react';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  backgroundColor,
  BackgroundColorProps,
  LayoutProps,
  SpacingProps,
  useRestyle,
  ResponsiveValue,
} from '@shopify/restyle';
import {StyleSheet} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';

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
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> & {
    bannerText: string;
    image: number | Source;
    extraStyles?: object;
    textVariant: ResponsiveValue<keyof Theme['textVariants'], Theme>;
    textStyle?: object;
  };

const Banner = ({bannerText, ...rest}: Props) => {
  const props = useRestyle([restyleFunctions], rest);
  const {image, extraStyles, textVariant, textStyle} = rest;

  return (
    <BannerContainer {...props}>
      <FastImage
        style={[styles.image, extraStyles]}
        source={image}
        resizeMode={FastImage.resizeMode.cover}>
        <Text variant={textVariant} style={textStyle}>
          {bannerText}
        </Text>
      </FastImage>
    </BannerContainer>
  );
};

export default Banner;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: Math.round(moderateVerticalScale(200)),
    borderRadius: Math.round(moderateScale(20)),
    overflow: 'hidden',
  },
});
