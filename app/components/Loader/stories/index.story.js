/**
*
* Button
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];

storiesOf(componentPath, module)
.add('primary Button',
withInfo('Notes for primary state')(
  () => (<Button />)
));
