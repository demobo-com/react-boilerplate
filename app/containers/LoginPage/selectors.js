import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
export const selectLoginPageDomain = (state) => state.get('loginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

export const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectLoginPage;
