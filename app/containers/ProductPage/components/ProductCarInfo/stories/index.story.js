/**
*
* ProductCarInfo
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import fakeData from 'apis/fakeData';

import ProductCarInfo from '../';

const { images, make, carType, year, model, vin, mileage, accident = false, price } = fakeData.product;
const text = { make, carType, year, model, vin, mileage, accident, price };
const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <ProductCarInfo images={images} text={text} />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <ProductCarInfo />
      )
    )
  );
