import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Banner, Box, Button, ProductCard} from '../components';
import {Source} from 'react-native-fast-image';
import {State} from '../types/commons';
import {useSelector} from 'react-redux';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const CategoryDetailScreen = () => {
  let route: RouteProp<
    {params: {header: string; image: number | Source}},
    'params'
  > = useRoute();
  const {params} = route;
  const CategoryListData = useSelector(
    (state: State) => state.categoryDetails.CategoryList,
  );

  const SubCategoryListData = useSelector(
    (state: State) => state.categoryDetails.SubCategoryList,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box>
        <Banner
          marginHorizontal={3}
          marginTop={3}
          variant={'categoryCard'}
          bannerText={params?.header}
          image={params?.image}
          textVariant={'bannerHeader'}
          textStyle={{
            backgroundColor: '#000000c0',
          }}
        />
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-around'}}
          contentContainerStyle={{
            paddingBottom: Math.round(moderateVerticalScale(200)),
          }}
          data={SubCategoryListData}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <ProductCard
                ProductName={item.title}
                ProductDescription={item.description}
                Price={`${item.price.toString()} €`}
                image={{
                  uri: item.image,
                }}
                marginVertical={5}
              />
            );
          }}
          ListHeaderComponent={() => (
            <Box backgroundColor={'buttonText'}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={['All Products', ...CategoryListData]}
                contentContainerStyle={styles.flatlistContainer}
                renderItem={({item}) => {
                  return (
                    <Button
                      key={item.toString()}
                      onPress={() => console.log('Button Pressed')}
                      label={item}
                      backgroundColor={'secondary'}
                      variant="subcategory"
                      marginHorizontal={2}
                      textVariants="button"
                    />
                  );
                }}
              />
            </Box>
          )}
          stickyHeaderIndices={[0]}
        />
      </Box>
    </SafeAreaView>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  flatlistContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Math.round(moderateVerticalScale(20)),
    marginLeft: Math.round(moderateScale(20)),
  },
});
