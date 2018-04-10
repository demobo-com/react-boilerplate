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
        onClick={action('TextInput was clicked')}
        input={{
          name: 'firstName',
        }}
        meta={{
          dirty: false,
          touched: false,
          error: '',
        }}
      />)
    )
  )
  .add('error state',
    withNotes('Notes for Normal state')(() => (
      <TextInput
        onClick={action('TextInput was clicked')}
        input={{
          name: 'firstName',
        }}
        meta={{
          dirty: true,
          touched: true,
          error: 'isRequired',
        }}
      />)
    )
  )
  .add('without label state',
    withNotes('Notes for without label state')(() => (
      <TextInput
        onClick={action('TextInput was clicked')}
        input={{
          name: 'firstName',
        }}
        meta={{
          dirty: false,
          touched: false,
          error: '',
        }}
        hasLabel={false}
      />)
    )
  )
  .add('label is in input state',
    withNotes('Notes for label is in input state')(() => (
      <TextInput
        onClick={action('TextInput was clicked')}
        input={{
          name: 'firstName',
        }}
        meta={{
          dirty: true,
          touched: true,
          error: 'isRequired',
        }}
        hasLabel={false}
        iconName="mail"
      />)
    )
  );
