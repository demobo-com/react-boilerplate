/**
*
* CountDownTime
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import CountDownTime from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <CountDownTime
          date={'2018-9-30'}
        />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <CountDownTime onClick={action('CountDownTime was clicked')} />
      )
    )
  );
