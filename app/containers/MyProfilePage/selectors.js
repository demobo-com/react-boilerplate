import { createSelector } from 'reselect';

/**
 * Direct selector to the myProfilePage state domain
 */
export const selectMyProfilePageDomain = (state) => state.get('myProfilePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyProfilePage
 */
export const selectMyProfilePage = createSelector(
  selectMyProfilePageDomain,
  (substate) => substate
);

export default selectMyProfilePage;
