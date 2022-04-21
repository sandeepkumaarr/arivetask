/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import Navigator from './src/navigation/Navigator';

import theme from './src/themes/default';

const STORYBOOK_START = false;

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default STORYBOOK_START ? require('./storybook').default : App;
