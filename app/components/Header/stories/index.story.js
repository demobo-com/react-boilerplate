/**
*
* Header
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import UserDropdown from 'components/UserDropdown';
import Header from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
const getFundCarDropDownMenuItemsData = () => ([
  {
    label: 'logOut',
    onClick: action('logout was clicked'),
  },
  {
    label: 'logOut',
    onClick: action('logout was clicked'),
  },
  {
    label: 'logOut',
    onClick: action('logout was clicked'),
  },
]);
const getFundCarHeaderData = (isLoggedIn) => ({
  // logoSrc: null,
  onClick: action('logo was clicked'),
  menuItems: [
    {
      label: 'home',
      onClick: action('home was clicked'),
    },
    {
      label: 'crowdFund',
      onClick: action('crowdFund was clicked'),
    },
    {
      label: 'en',
      onClick: action('english was clicked'),
    },
    {
      label: 'logIn',
      isShow: !isLoggedIn,
      onClick: action('logIn was clicked'),
    },
    {
      label: 'signUp',
      isShow: !isLoggedIn,
      onClick: action('signUp was clicked'),
      type: 'warning',
    },
    {
      label: 'user',
      isShow: isLoggedIn,
      children: <UserDropdown menuItems={getFundCarDropDownMenuItemsData()} />,
    },
  ],
});

storiesOf(componentPath, module)
  .add('loggedIn state',
    withInfo('Notes for Normal state')(
      () => (
        <Header {...getFundCarHeaderData(true)} />
      )
    )
  )
  .add('unLoggedIn state',
    withInfo('Notes for Other state')(
      () => (
        <Header {...getFundCarHeaderData(false)} />
      )
  )
);
