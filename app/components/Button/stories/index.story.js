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
.add('login Button',
withNotes('Notes for Normal state')(
  () => (<Button onClick={action('Button was clicked')} type="primary" label="login" loading={false} />)
  ))
.add('disabled Button',
withNotes('Notes for disabled state')(
  () => (<Button onClick={action('Button was clicked')} type="primary" label="login" loading={false} disabled />)
))
.add('loading Button',
withNotes('loading state')(
  () => (<Button onClick={action('Button was clicked')} type="primary" label="login" loading />)
))
.add('register Button',
withNotes('Notes for Normal state')(
  () => (<Button onClick={action('Button was clicked')} type="primary" label="register" loading={false} />)
))
.add('purchase Button',
withNotes('Notes for Normal state')(
  () => (<Button onClick={action('Button was clicked')} type="primary" label="purchase" loading={false} />)
));
