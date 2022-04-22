import {ImageSourcePropType, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Banner} from '../components';

const CategoryDetailScreen = () => {
  let route: RouteProp<
    {params: {header: string; image: ImageSourcePropType}},
    'params'
  > = useRoute();
  const {params} = route;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Banner
        marginHorizontal={3}
        variant={'categoryCard'}
        bannerText={params?.header}
        image={params?.image}
        textVariant={'bannerHeader'}
      />
    </SafeAreaView>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({});
