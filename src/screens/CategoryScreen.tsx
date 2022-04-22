import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Banner, Box, Text} from '../components';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {CategoryData} from '../constants/data';
import {useNavigation} from '@react-navigation/native';
import routes from '../navigation/routes';

const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box alignItems={'center'} marginTop={10} marginBottom={20}>
        <Text variant={'header'}>Categories</Text>
      </Box>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-around'}}
        data={CategoryData}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  routes.CATEGORY_DETAIL_SCREEN as never,
                  {} as never,
                )
              }>
              <Banner
                marginVertical={5}
                variant={'CategoryHome'}
                bannerText={item.bannerText}
                image={item.image}
                extraStyles={{
                  width: Math.round(moderateVerticalScale(150)),
                  height: Math.round(moderateVerticalScale(150)),
                  borderRadius: Math.round(moderateScale(5)),
                }}
                textVariant={'bannerHeader_small'}
                textStyle={{
                  backgroundColor: '#000000c0',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
