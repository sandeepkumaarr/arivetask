import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CategoryDetailScreen, CategoryScreen} from '../screens/Index';
import routes from './routes';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.CATEGORY_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.CATEGORY_SCREEN} component={CategoryScreen} />
      <Stack.Screen
        name={routes.CATEGORY_DETAIL_SCREEN}
        component={CategoryDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
