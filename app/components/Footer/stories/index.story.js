/**
*
* Footer
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import Footer from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('footer state',
    withNotes('Notes for Normal state')(
      () => (
        <Footer onClick={action('Footer was clicked')} />
      )
    )
  )
