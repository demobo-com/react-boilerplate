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
});
