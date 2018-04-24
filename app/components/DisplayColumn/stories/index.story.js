/**
*
* DisplayColumn
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import fakeData from 'apis/fakeData';
import DisplayColumn from '../';


const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('default state',
    withInfo('default state')(
      () => (
        <DisplayColumn data={fakeData.displayRow} />
      )
    )
  )
  .add('hasStripe state',
    withInfo('hasStripe state')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe />
      )
    )
  )
  .add('width DisplayColumn',
    withInfo('width DisplayColumn')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe width="600px" />
      )
    )
  )
  .add('default left right DisplayColumn',
    withInfo('width DisplayColumn')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe width="600px" />
      )
    )
  )
  .add('left left DisplayColumn',
    withInfo('width DisplayColumn')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe width="600px" valueAlign="left" />
      )
    )
  )
  .add('left center DisplayColumn',
    withInfo('width DisplayColumn')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe width="600px" valueAlign="center" />
      )
    )
  )
  .add('center left DisplayColumn',
    withInfo('width DisplayColumn')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe width="600px" keyAlign="center" valueAlign="left" />
      )
    )
  )
  .add('center center DisplayColumn',
    withInfo('width DisplayColumn')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe width="600px" keyAlign="center" valueAlign="center" />
      )
    )
  )
  .add('center right DisplayColumn',
    withInfo('width DisplayColumn')(
      () => (
        <DisplayColumn data={fakeData.displayRow} hasStripe width="600px" keyAlign="center" valueAlign="right" />
      )
    )
  );
