/**
*
* FilterComponent
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import FilterComponent from '../';

const optionsSorting = [{ id: 'interestAscending', name: 'interestAscending' }, { id: 'interestDescending', name: 'interestDescending' }, { id: 'ratingAscending', name: 'ratingAscending' }, { id: 'ratingDescending', name: 'ratingDescending' }];
const optionsAvailability = [{ id: 'available', name: 'available', count: 3 }, { id: 'funded', name: 'funded', count: 79 }, { id: 'pending', name: 'pending', count: 43 }];
const optionsFundingBase = [{ id: '2000', name: 2000, count: 10 }, { id: '1000', name: 1000, count: 22 }, { id: '500', name: '500', count: 3 }];
const optionsFundingPeriod = [{ id: '90', name: 90, count: 3 }, { id: '120', name: 120, count: 116 }, { id: '240', name: 240, count: 2 }, { id: '30', name: 30, count: 1 }];
const productFilter = { color: [], fundingPeriod: [], availability: [], fundingBase: [] };

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('fundingSorting state',
    withInfo('fundingPeriod state')(
      () => (
        <FilterComponent
          name="fundingSorting"
          options={optionsSorting}
          changeSorting={action('changeSorting')}
        />
      )
    )
  )
  .add('fundingPeriod state',
    withInfo('fundingPeriod state')(
      () => (
        <FilterComponent
          name="fundingPeriod"
          options={optionsFundingPeriod}
          filter={productFilter}
          changeFilter={action('changeFilter')}
        />
      )
    )
  )
  .add('availability state',
    withInfo('availability state')(
      () => (
        <FilterComponent
          name="availability"
          options={optionsAvailability}
          filter={productFilter}
          changeFilter={action('changeFilter')}
        />
      )
    )
  )
  .add('fundingBase state',
    withInfo('fundingBase state')(
      () => (
        <FilterComponent
          name="fundingBase"
          options={optionsFundingBase}
          filter={productFilter}
          changeFilter={action('changeFilter')}
        />
      )
    )
  );
