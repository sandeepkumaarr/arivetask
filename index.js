/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import App from './App';
import {name as appName} from './app.json';
import {
  navigationRef,
  routeNameRef,
  isReadyRef,
} from './src/navigation/RootNavigation';

const Root = () => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <App />
    </NavigationContainer>
  );
};

enableScreens();
AppRegistry.registerComponent(appName, () => Root);
