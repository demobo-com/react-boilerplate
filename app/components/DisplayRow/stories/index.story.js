/**
*
* DisplayRow
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import fakeData from 'apis/fakeData';
import DisplayRow from '../';

const className = '';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <DisplayRow data={fakeData.displayRow} className={className} />
      )
    )
  )
  .add('hasDivider default state',
    withInfo('Notes for Normal state')(
      () => (
        <DisplayRow data={fakeData.displayRow} className={className} hasDivider />
      )
    )
  )
  .add('hasDivider dotted state',
    withInfo('Notes for Normal state')(
      () => (
        <DisplayRow data={fakeData.displayRow} className={className} hasDivider dividerStyle="dotted" />
      )
    )
  )
  .add('hasDivider dashed state',
    withInfo('Notes for Normal state')(
      () => (
        <DisplayRow data={fakeData.displayRow} className={className} hasDivider dividerStyle="dashed" />
      )
    )
  )
  .add('hasDivider horizontal default state',
    withInfo('Notes for Normal state')(
      () => (
        <DisplayRow data={fakeData.displayRow} className={className} hasDivider type="horizontal" />
      )
    )
  )
  .add('hasDivider horizontal dotted state',
    withInfo('Notes for Normal state')(
      () => (
        <DisplayRow data={fakeData.displayRow} className={className} hasDivider dividerStyle="dotted" type="horizontal" />
      )
    )
  )
  .add('hasDivider horizontal dashed state',
    withInfo('Notes for Normal state')(
      () => (
        <DisplayRow data={fakeData.displayRow} className={className} hasDivider dividerStyle="dashed" type="horizontal" />
      )
    )
  );
