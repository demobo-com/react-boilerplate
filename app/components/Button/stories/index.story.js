/**
*
* Button
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import Button from '../';

storiesOf('Button', module)
  .add('Normal state',
    withNotes('Notes for Normal state')(() => (
      <Button onClick={action('Button was clicked')} />
    )
  )
);
