/**
*
* Button
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import TextInput from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('unSelect state',
    withNotes('Notes for Normal state')(() => (
      <TextInput
        input={{
          name: 'firstName',
          onChange: () => action('TextInput was clicked'),
        }}
      />)
    )
  )
  .add('select state',
    withNotes('Notes for without label state')(() => (
      <TextInput
        input={{
          name: 'firstName',
          onChange: () => action('TextInput was clicked'),
          value: 'true',
        }}
      />)
    )
  );
