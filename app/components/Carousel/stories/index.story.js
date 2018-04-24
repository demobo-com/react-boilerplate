/**
*
* Carousel
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import fakeData from 'apis/fakeData';

import Carousel from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('With images',
    withInfo('With images')(
      () => (
        <Carousel imageUrls={fakeData.product.images} imagesShown={3} />
      )
    )
  )
  .add('With no images',
    withInfo('With no images')(
      () => (
        <Carousel />
      )
    )
  );
