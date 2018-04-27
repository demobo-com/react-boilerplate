/*
 * FilterComponent Messages
 *
 * This contains all the text for the FilterComponent component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  base: {
    id: 'app.components.GridFilter.base',
    defaultMessage: 'base',
  },
  period: {
    id: 'app.components.GridFilter.period',
    defaultMessage: 'period',
  },
  availability: {
    id: 'app.components.GridFilter.availability',
    defaultMessage: 'availability',
  },
  baseValue: {
    id: 'app.components.GridFilter.baseValue',
    defaultMessage: '${value}', // eslint-disable-line no-template-curly-in-string
  },
  periodValue: {
    id: 'app.components.GridFilter.periodValue',
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
