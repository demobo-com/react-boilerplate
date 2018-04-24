/**
*
* AccountLayout
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

import AccountLayout from '../';

const header = <div>头部</div>;
const leftChildren = <div>左侧</div>;
const rightChildren = <div>右侧</div>;

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('header-left-right',
    withNotes('Notes for Normal state')(
      () => (
        <AccountLayout header={header} leftChildren={leftChildren} rightChildren={rightChildren}></AccountLayout>
      )
    )
  )
  .add('left-right',
    withNotes('Notes for Normal state')(
      () => (
        <AccountLayout rightChildren={rightChildren} leftChildren={leftChildren} ></AccountLayout>
      )
    )
  );
