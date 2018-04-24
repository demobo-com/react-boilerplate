/**
*
* SignUpForm
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SignUpForm from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
.add('signUpForm',
    withInfo('Notes for personal signUpForm')(
      () => (
        <SignUpForm onSubmit={action('SignUpForm was clicked')} />
      )
    )
  );
