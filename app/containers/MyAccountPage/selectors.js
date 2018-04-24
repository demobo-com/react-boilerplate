// import { createSelector } from 'reselect';
import { createGetSelector } from 'reselect-immutable-helpers';
// import { fromJS } from 'immutable';

/**
 * Direct selector to the myAccountPage state domain
 */
export const selectMyAccountPageDomain = (state) => state.get('myAccountPage');

export const selectIsLoading = createGetSelector(
  selectMyAccountPageDomain, 'isLoading'
);
