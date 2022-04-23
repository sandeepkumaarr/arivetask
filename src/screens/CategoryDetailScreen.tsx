import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Banner, Box, Button, ProductCard, Text} from '../components';
import FastImage, {Source} from 'react-native-fast-image';
import {State} from '../types/commons';
import {useSelector} from 'react-redux';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {
  getAllProducts,
  getSubCategory,
} from '../redux/actions/CategoryDetailsActions';
import ProductCardPlaceholder from '../skeletons/ProductCardPlaceholder';

const CategoryDetailScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const CategoryListData = useSelector(
    (state: State) => state.categoryDetails.CategoryList,
  );

  const SubCategoryListData = useSelector(
    (state: State) => state.categoryDetails.SubCategoryList,
  );

  const SubCatLoading = useSelector(
    (state: State) => state.categoryDetails.subCategoryLoading,
  );

  let route: RouteProp<
    {
      params: {
        header: string;
        image: number | Source;
      };
    },
    'params'
  > = useRoute();
  const {params} = route;
  const [selectedSubCategory, setselectedSubCategory] = useState(
    CategoryListData[0]?.id,
  );

  const handleSubCatChange = (value: string) => {
    dispatch(getSubCategory(value));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box paddingHorizontal={2} marginBottom={2}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <FastImage
            style={{width: 50, height: 30}}
            source={require('../assets/images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text variant={'ProductName'}>Back</Text>
        </TouchableOpacity>
      </Box>

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
              <>
                {SubCatLoading ? (
                  <ProductCardPlaceholder key={item.id.toString()} />
                ) : (
                  <ProductCard
                    ProductName={item.title}
                    ProductDescription={item.description}
                    Price={`${item.price.toString()} €`}
                    image={{
                      uri: item.image,
                    }}
                    marginVertical={5}
                  />
                )}
              </>
            );
          }}
          ListHeaderComponent={() => (
            <Box backgroundColor={'buttonText'}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={CategoryListData}
                contentContainerStyle={styles.flatlistContainer}
                renderItem={({item}) => {
                  return (
                    <Button
                      key={item.id.toString()}
                      onPress={() => {
                        setselectedSubCategory(item.id);
                        if (
                          item?.category.toLowerCase().includes('allproducts')
                        ) {
                          dispatch(getAllProducts());
                        } else {
                          handleSubCatChange(item.category);
                        }
                      }}
                      label={item.category}
                      backgroundColor={
                        item.id === selectedSubCategory
                          ? 'secondary'
                          : 'primary'
                      }
                      variant="subcategory"
                      marginHorizontal={2}
                      textVariants={
                        item.id === selectedSubCategory ? 'button' : 'buttonoff'
                      }
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
    marginRight: Math.round(moderateScale(20)),
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
