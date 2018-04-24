/**
*
* Footer
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Footer from '../';

const footerProps = {
  phone: '1-415-123-4567',
  email: 'cfo@lendingcar.com',
  address: '123 abc street, ca 94015',
  // logo: img,
  contactUs: action('contact us action'),
};

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('footer state',
    withInfo('Notes for Normal state')(
      () => (
        <Footer {...footerProps} />
      )
    )
  );
