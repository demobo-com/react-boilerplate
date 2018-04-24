/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import {
  DEFAULT_ACTION,
  PERFORMANCE_LOAD_SUCCESS,
  PERFORMANCE_LOAD_FAIL,
} from './constants';

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USER_LOGOUT_SUCCESS:
      return initialState;
    case PERFORMANCE_LOAD_SUCCESS:
      return state.set('performance', fromJS(action.performance));
    case PERFORMANCE_LOAD_FAIL:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
