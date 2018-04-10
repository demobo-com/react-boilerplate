/**
*
* LoginLayout
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import LoginForm from 'forms/LoginForm';
import LoginLayout from '../';
import '../../../styles/index.scss';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
const loginLayoutData = {
  onChange: () => (key) => {
    action(`${key} was clicked`);
  },
  tabPanes: [
    {
      key: 'enterpriseInvestor',
      iconType: 'usergroup-add',
      children: <LoginForm />,
    },
    {
      key: 'personInvestor',
      iconType: 'user',
      children: <LoginForm />,
    },
  ],
};

storiesOf(componentPath, module)
  .add('logIn state',
    withNotes('Notes for Normal state')(
      () => (
        <LoginLayout {...loginLayoutData} />
      )
    )
  )
  .add('signUp state',
    withNotes('Notes for Other state')(
      () => (
        <LoginLayout onClick={action('LoginLayout was clicked')} />
      )
    )
  );
