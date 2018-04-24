/**
*
* Button
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextInput from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(() => (
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
    withInfo('Notes for Normal state')(() => (
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
  );
