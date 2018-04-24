import { createGetSelector } from 'reselect-immutable-helpers';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

/**
 * Direct selector to the homePage state domain
 */
export const selectHomePageDomain = (state) => state.get('homePage');

// export const selectHomePageDomain = (state) => state.get('homePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePage
 */

export const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);

export const selectPerformance = createGetSelector(selectHomePageDomain, 'performance', Immutable.Map());
