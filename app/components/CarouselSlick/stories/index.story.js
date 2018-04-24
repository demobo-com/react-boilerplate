/**
*
* CarouselSlick
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import fakeData from 'apis/fakeData';

import CarouselSlick from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <CarouselSlick imageUrls={fakeData.product.images} imagesShown={3} />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <CarouselSlick imageUrls={fakeData.product.images} imagesShown={1} />
      )
    )
  );
