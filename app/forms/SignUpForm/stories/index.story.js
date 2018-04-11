/**
*
* SignUpForm
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import SignUpForm from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
.add('personal SignUpForm',
    withNotes('Notes for personal signUpForm')(
      () => (
        <SignUpForm onSubmit={action('SignUpForm was clicked')} />
      )
    )
  )
  .add('company SignUpForm',
    withNotes('Notes for company signUpForm')(
      () => (
        <SignUpForm onSubmit={action('SignUpForm was clicked')} type />
      )
    )
  );
