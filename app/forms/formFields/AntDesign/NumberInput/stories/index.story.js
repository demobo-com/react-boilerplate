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
  .add('Normal state',
    withNotes('Notes for Normal state')(() => (
      <TextInput
        input={{
          name: 'firstName',
          onChange: () => action('TextInput was clicked'),
        }}
        meta={{
          dirty: false,
          touched: false,
          error: '',
        }}
      />)
    )
  )
  .add('Error state',
    withNotes('Notes for Normal state')(() => (
      <TextInput
        onClick={action('TextInput was clicked')}
        input={{
          name: 'firstName',
          onChange: () => action('TextInput was clicked'),
        }}
        meta={{
          dirty: true,
          touched: true,
          error: 'isRequired',
        }}
      />)
    )
  );
