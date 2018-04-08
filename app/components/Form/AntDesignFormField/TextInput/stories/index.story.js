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

storiesOf('AntDesignFormField/TextInput', module)
  .add('Normal state',
    withNotes('Notes for Normal state')(() => (
      <TextInput onClick={action('TextInput was clicked')} input={{
        name: 'firstName'
        }}
      />
    )
  )
);
