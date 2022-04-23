import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const ProductCardPlaceholder = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          height: Math.round(moderateVerticalScale(200)),
        }}>
        <View
          style={{
            width: Math.round(moderateScale(130)),
            height: Math.round(moderateVerticalScale(130)),
            borderRadius: Math.round(moderateScale(10)),
          }}
        />
        <View>
          <View
            style={{
              width: Math.round(moderateScale(120)),
              height: Math.round(moderateVerticalScale(20)),
              borderRadius: Math.round(moderateScale(4)),
              marginTop: Math.round(moderateScale(10)),
            }}
          />
          <View
            style={{
              marginTop: Math.round(moderateScale(6)),
              width: Math.round(moderateScale(80)),
              height: Math.round(moderateVerticalScale(20)),
              borderRadius: Math.round(moderateScale(4)),
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default ProductCardPlaceholder;

const styles = StyleSheet.create({});
