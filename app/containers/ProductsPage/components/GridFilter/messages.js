/*
 * GridFilter Messages
 *
 * This contains all the text for the GridFilter component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.GridFilter.header',
    defaultMessage: 'This is the GridFilter component !',
  },
  fundingBase: {
    id: 'app.components.GridFilter.fundingBase',
    defaultMessage: 'fundingBase',
  },
  fundingPeriod: {
    id: 'app.components.GridFilter.fundingPeriod',
    defaultMessage: 'fundingPeriod',
  },
  availability: {
    id: 'app.components.GridFilter.availability',
    defaultMessage: 'availability',
  },
  fundingBaseValue: {
    id: 'app.components.GridFilter.fundingBaseValue',
    defaultMessage: '${value}', // eslint-disable-line no-template-curly-in-string
  },
  fundingPeriodValue: {
    id: 'app.components.GridFilter.fundingPeriodValue',
    defaultMessage: '{value} Days',
  },
  available: {
    id: 'app.components.GridFilter.available',
    defaultMessage: 'Available',
  },
  done: {
    id: 'app.components.GridFilter.done',
    defaultMessage: 'Done',
  },
  funded: {
    id: 'app.components.GridFilter.funded',
    defaultMessage: 'Funded',
  },
  pending: {
    id: 'app.components.GridFilter.pending',
    defaultMessage: 'Pending',
  },
  all: {
    id: 'app.components.GridFilter.all',
    defaultMessage: 'All',
  },
});
