/**
*
* Subtitle
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Subtitle from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <Subtitle id="app.common.overallRating" />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <Subtitle id="app.data.period" />
      )
    )
  );
