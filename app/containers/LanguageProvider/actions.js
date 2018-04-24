/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE,
} from './constants';

export function changeLocaleAction(locale) {
  return {
    type: CHANGE_LOCALE,
    locale,
  };
}
