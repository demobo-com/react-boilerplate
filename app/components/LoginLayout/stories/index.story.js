/**
*
* LoginLayout
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import SignUpForm from 'forms/SignUpForm';
import LoginForm from 'forms/LoginForm';
import LoginLayout from '../';
import '../../../styles/index.scss';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
const tabPanes = [
  {
    key: 'enterpriseInvestor',
    iconType: 'usergroup-add',
  },
  {
    key: 'personInvestor',
    iconType: 'user',
  },
];
const loginLayoutData = {
  onChange: () => (key) => {
    action(`${key} was clicked`);
    return key;
  },
  tabPanes,
};

storiesOf(componentPath, module)
  .add('logIn state',
    withInfo('Notes for Normal state')(
      () => (
        <LoginLayout {...loginLayoutData} >
          <LoginForm />
        </LoginLayout>
      )
    )
  )
  .add('signUp state',
    withInfo('Notes for Normal state')(
      () => (
        <LoginLayout {...loginLayoutData} >
          <SignUpForm />
        </LoginLayout>
      )
    )
  )
  .add('other state',
    withInfo('Notes for Normal state')(
      () => (
        <LoginLayout tabPanes={tabPanes} >

        </LoginLayout>
      )
    )
  );
