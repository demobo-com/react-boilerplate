/*
 *
 * MyAccountPage actions
 *
 */

import {
  MYACCOUNT_LOAD_ACTION,
  MYACCOUNT_LOAD_SUCCESS_ACTION,
  MYACCOUNT_LOAD_FAIL_ACTION,
} from './constants';

export function loadMyAccountAction(uid) {
  return {
    type: MYACCOUNT_LOAD_ACTION,
    uid,
  };
}

export function loadMyAccountSuccessAction(myAccountData) {
  return {
    type: MYACCOUNT_LOAD_SUCCESS_ACTION,
    myAccountData,
  };
}

export function loadMyAccountFailAction(error) {
  return {
    type: MYACCOUNT_LOAD_FAIL_ACTION,
    error,
  };
}
