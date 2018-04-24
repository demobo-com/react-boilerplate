/**
*
* Headliner
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Headliner from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <Headliner />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <Headliner />
      )
    )
  );
