/**
*
* Menu
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import UserDropdown from 'components/UserDropdown';
import Menu from '../';
import '../../../styles/index.scss';

const getFundCarDropDownMenuItemsData = () => ([
  {
    id: 'logOut',
    onClick: action('logout was clicked'),
  },
]);

const getFundCarMenuItemsData = (isLoggedIn) => ([
  {
    id: 'home',
    onClick: action('home was clicked'),
  },
  {
    id: 'crowdFund',
    onClick: action('crowdFund was clicked'),
  },
  {
    id: 'en',
    onClick: action('english was clicked'),
  },
  {
    id: 'logIn',
    isShow: !isLoggedIn,
    onClick: action('logIn was clicked'),
  },
  {
    id: 'signUp',
    isShow: !isLoggedIn,
    onClick: action('signUp was clicked'),
    type: 'primary',
  },
  {
    id: 'user',
    isShow: isLoggedIn,
    children: <UserDropdown menuItems={getFundCarDropDownMenuItemsData()} />,
  },
]);

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('loggedIn state',
    withNotes('Notes for Normal state')(
      () => (
        <Menu menuItems={getFundCarMenuItemsData(true)} />
      )
    )
  )
  .add('unLoggedIn state',
    withNotes('Notes for Other state')(
      () => (
        <Menu menuItems={getFundCarMenuItemsData(false)} />
      )
    )
  );
