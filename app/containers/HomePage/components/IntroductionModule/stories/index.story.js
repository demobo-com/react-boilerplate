/**
*
* InvestmentComparison
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import IntroductionModule from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withInfo('Notes for Normal state')(
      () => (
        <IntroductionModule onClick={action('InvestmentComparison was clicked')} />
      )
    )
  )
  .add('Other state',
    withInfo('Notes for Other state')(
      () => (
        <IntroductionModule onClick={action('InvestmentComparison was clicked')} />
      )
    )
  );
