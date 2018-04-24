/**
*
* SelectTagsInput
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import SelectTagsInput from '../';

const normalState = {
  input: {
    onChange: action('SampleInput was clicked'),
    value: ['value', 'value1'],
    name: 'normalState',
  },
  placeholder: 'normalPlaceholder',
  className: '',
  meta: {
    dirty: false,
    touched: false,
    error: '',
  },
  formItemLayout: {},
};

const errorState = {
  input: {
    onChange: action('SampleInput was clicked'),
    value: [],
    name: 'errorState',
  },
  placeholder: 'errorPlaceholder',
  className: '',
  meta: {
    dirty: true,
    touched: true,
    error: 'isRequired',
  },
  formItemLayout: {},
};

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withNotes('Notes for Normal state')(
      () => (
        <SelectTagsInput {...normalState} />
      )
    )
  )
  .add('error state',
    withNotes('error state')(
      () => (
        <SelectTagsInput {...errorState} />
      )
    )
  );
