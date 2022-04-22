import React from 'react';
import {
  createVariant,
  createRestyleComponent,
  VariantProps,
  BackgroundColorProps,
  useRestyle,
  SpacingProps,
  BorderProps,
  LayoutProps,
  ResponsiveValue,
} from '@shopify/restyle';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {Theme} from '../themes/default';
import Box from './Box';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import Text from './Text';

const ProductCardVariant = createVariant({themeKey: 'ProductCardVariants'});
const Container = createRestyleComponent<
  VariantProps<Theme, 'ProductCardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([ProductCardVariant], Box);

const restyleFunctions = [ProductCardVariant as any];

type Props = VariantProps<Theme, 'ProductCardVariants'> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> & {
    ProductName: string;
    ProductDescription: string;
    Price: string;
    image: ImageSourcePropType;
  };

const ProductCard = ({...rest}: Props) => {
  const props = useRestyle([restyleFunctions], rest);
  const {ProductName, ProductDescription, Price, image} = rest;

  const TextItem = (
    value: string | number,
    lines: number,
    variant: ResponsiveValue<keyof Theme['textVariants'], Theme>,
  ) => {
    return (
      <Box flexDirection={'row'} marginVertical={1}>
        <Text
          variant={variant}
          numberOfLines={lines}
          style={{flex: 1, flexWrap: 'wrap'}}>
          {value}
        </Text>
      </Box>
    );
  };
  return (
    <Container {...props}>
      <Box
        width={Math.round(moderateScale(130))}
        height={Math.round(moderateVerticalScale(130))}
        backgroundColor={'primary'}
        alignItems="center"
        justifyContent={'center'}
        borderRadius={Math.round(moderateScale(10))}
        marginBottom={4}
        style={styles.shadow}>
        <Image style={styles.image} source={image} />
      </Box>
      <Box width={Math.round(moderateScale(130))}>
        {TextItem(ProductName, 1, 'ProductName')}
        {TextItem(ProductDescription, 2, 'ProductDescription')}
        {TextItem(Price, 1, 'price')}
      </Box>
    </Container>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    width: Math.round(moderateScale(60)),
    height: Math.round(moderateVerticalScale(60)),
  },
  shadow: {
    shadowColor: 'Black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    elevation: 2,
  },
});
