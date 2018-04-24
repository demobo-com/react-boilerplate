/*
 *
 * MyAccountPage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import {
  MYACCOUNT_LOAD_ACTION,
  MYACCOUNT_LOAD_SUCCESS_ACTION,
  MYACCOUNT_LOAD_FAIL_ACTION,
} from './constants';

const initialState = fromJS({
  myAccountData: [],
  isLoading: true,
  isError: false,
  message: '',
});

function myAccountPageReducer(state = initialState, action) {
  switch (action.type) {
    case MYACCOUNT_LOAD_ACTION:
      return initialState.set('isLoading', true);
    case MYACCOUNT_LOAD_SUCCESS_ACTION:
      return state.set('myAccountData', action.myAccountData)
                  .set('isLoading', false)
                  .set('isError', false);
    case MYACCOUNT_LOAD_FAIL_ACTION:
      return state.set('isLoading', false)
                  .set('isError', true)
                  .set('message', action.error.message);
    case USER_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default myAccountPageReducer;
