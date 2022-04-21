import React from 'react';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {Text, View, Image} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import CenterView from '../CenterView';
import Box from '../../components/Box';

storiesOf('Banner', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Categories Details Banner', () => (
    <Box flex={1} marginHorizontal={2}>
      <Image
        source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          alignItems: 'stretch',
          bottom: 0,
          right: 0,
          borderRadius: 10,
        }}
      />
      <Box alignItems={'center'} justifyContent={'center'} height={200}>
        <Text>Test</Text>
      </Box>
    </Box>
  ));
