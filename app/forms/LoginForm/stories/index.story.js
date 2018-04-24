/**
*
* LoginForm
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import LoginForm from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('login state',
    withInfo('Notes for Normal state')(
      () => (
        <LoginForm onSubmit={action('LoginForm was clicked')} />
      )
    )
  )
  .add('showResend state',
    withInfo('Notes for Normal state')(
      () => (
        <LoginForm onSubmit={action('LoginForm was clicked')} showResend />
      )
    )
  );
