/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  PERFORMANCE_LOAD_SUCCESS,
  PERFORMANCE_LOAD_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadPerformanceSuccessAction(performance) {
  return {
    type: PERFORMANCE_LOAD_SUCCESS,
    performance,
  };
}

export function loadPerformanceFailAction(error) {
  return {
    type: PERFORMANCE_LOAD_FAIL,
    error,
  };
}
