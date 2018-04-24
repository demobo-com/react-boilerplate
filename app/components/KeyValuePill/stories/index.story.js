/**
*
* KeyValuePill
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import KeyValuePill from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('small state',
    withInfo('Notes for Normal state')(
      () => (
        <KeyValuePill keyName="app.common.rating" value="A+" size="small" />
      )
    )
  )
  .add('medium state',
    withInfo('Notes for Other state')(
      () => (
        <KeyValuePill keyName="app.common.rating" value="ABCD" />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <KeyValuePill keyName="app.common.rating" value="ABCD" size="large" />
      )
    )
  );
