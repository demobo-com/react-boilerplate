/**
*
* OverallRatingLabel
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import OverallRatingLabel from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <div style={{ backgroundColor: 'blue', height: 100, padding: 50 }}>
          <OverallRatingLabel rating="A+" />
        </div>
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <div style={{ backgroundColor: 'blue' }}>
          <OverallRatingLabel rating="C" />
        </div>
      )
    )
  );
