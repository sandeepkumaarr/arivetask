import React from 'react';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import CenterView from '../CenterView';
import {Banner} from '../../components/index';

const image = {uri: 'https://picsum.photos/seed/picsum/200/300'};

storiesOf('Banner', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Categories Details Banner', () => (
    <Banner
      variant={'categoryCard'}
      bannerText={'Personal Care'}
      image={image}
    />
  ));
