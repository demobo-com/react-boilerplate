/*
 * FilterComponent Messages
 *
 * This contains all the text for the FilterComponent component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
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
  default: {
    id: 'app.components.GridFilter.default',
    defaultMessage: 'Default',
  },
  interestAscending: {
    id: 'app.components.GridFilter.interestAscending',
    defaultMessage: 'Interest Ascending',
  },
  interestDescending: {
    id: 'app.components.GridFilter.interestDescending',
    defaultMessage: 'Interest Descending',
  },
  ratingAscending: {
    id: 'app.components.GridFilter.ratingAscending',
    defaultMessage: 'Rating Ascending',
  },
  ratingDescending: {
    id: 'app.components.GridFilter.ratingDescending',
    defaultMessage: 'Rating Descending',
  },
});
