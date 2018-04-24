/**
*
* UserDropdown
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import UserDropdown from '../';

const getFundCarMenuItemsData = () => ([
  {
    label: 'logOut',
    onClick: action('logOut was clicked'),
  },
  {
    label: 'logOut',
    onClick: action('logOut was clicked'),
  },
  {
    label: 'logOut',
    onClick: action('logOut was clicked'),
  },
]);

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <UserDropdown menuItems={getFundCarMenuItemsData()} />
      )
    )
  );
