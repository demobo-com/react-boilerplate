/**
*
* CountDownTime
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import moment from 'moment';

import CountDownTime from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('date',
    withInfo('Notes for Normal state')(
      () => (
        <CountDownTime
          date={moment().add(2, 'day').format('YYYY-MM-DD')}
        />
      )
    )
  )
  .add('date + timerUnit="seconds"',
    withInfo('Notes for Normal state')(
      () => (
        <CountDownTime
          date={moment().add(2, 'day').format('YYYY-MM-DD')}
          timerUnit="seconds"
        />
      )
    )
  );
