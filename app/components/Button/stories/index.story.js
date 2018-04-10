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

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withNotes('Notes for Normal state')(
      () => (
        <Button onClick={action('Button was clicked')} type="primary" label="hello" size="large" />
      )
    )
  )
.add('Transparent state',
    withNotes('Notes for Normal state')(() => (
      <Button onClick={action('Button was clicked')} type="default" label="hello" size="large" />
    )
  )
)
.add('Alert state',
    withNotes('Notes for Normal state')(() => (
      <Button onClick={action('Button was clicked')} type="danger" label="hello" size="small" />
    )
  )
);
