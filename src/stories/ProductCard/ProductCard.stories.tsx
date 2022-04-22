import React from 'react';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';

import {ProductCard} from '../../components/index';
import CenterView from '../CenterView';

storiesOf('ProductCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default Product Card', () => (
    <ProductCard
      ProductName={'Marvis'}
      ProductDescription={'Marvis Whitening Mint Toothpaste'}
      Price={'9,95 €'}
      image={{uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}}
    />
  ));
