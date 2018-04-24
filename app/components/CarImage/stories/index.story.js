/**
*
* CarImage
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import CarImage from '../';
const carImageUrl = 'https://img.lendingcar.com/640x480/inventories/13uWsWHvswixUdI7C8HjIxsnI0iQigUYIx/7b6035f57ad6e55be1a46762426cf3bb.jpg';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <CarImage width="300" height="200" url={carImageUrl} className="some-car-image" isLazyLoad />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <CarImage width="300" height="200" url="" className="some-car-image" isLazyLoad />
      )
    )
  );
