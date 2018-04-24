/**
*
* ProductDetailTable
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ProductDetailTableTwo from '../';

const data = {
  productName: 'CFO9715435431531432',
  expectedAnnualYield: 7,
  crowdfunding: 10000,
  investmentPeriod: 120,
  paymentMethod: 'testtesttesttestt',
  min: 1000,
  max: 100000,
  investmentRate: 'A+',
  investmentBase: 1000,
  remittance: 'testtesttesttesttest',
};

// const na = '';
//
// const missingData = {
//   productName: na,
//   expectedAnnualYield: na,
//   crowdfunding: na,
//   investmentPeriod: na,
//   paymentMethod: na,
//   min: na,
//   max: na,
//   investmentRate: na,
//   investmentBase: na,
//   remittance: na,
// };

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <ProductDetailTableTwo data={data} />
      )
    )
  )
  .add('Missing state',
    withInfo('The state when the data is incorrect')(
      () => (
        <ProductDetailTableTwo />
      )
    )
  );
