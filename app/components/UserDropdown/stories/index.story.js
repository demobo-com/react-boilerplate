/**
*
* UserDropdown
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import UserDropdown from '../';

const getFundCarMenuItemsData = () => ([
  {
    id: 'logOut',
    onClick: action('logout was clicked'),
  },
]);

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withNotes('Notes for Normal state')(
      () => (
        <UserDropdown menuItems={getFundCarMenuItemsData()} />
      )
    )
  );
