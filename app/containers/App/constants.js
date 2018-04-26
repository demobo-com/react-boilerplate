/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

  export const DEFAULT_LOCALE = window.localStorage.DEFAULT_LOCALE || 'en';

  export const USER_LOGIN = 'app/App/USER_LOGIN';
  export const USER_LOGIN_SUCCESS = 'app/App/USER_LOGIN_SUCCESS';
  export const USER_LOGIN_FAIL = 'app/App/USER_LOGIN_FAIL';
  export const USER_UPDATE_CURRENT = 'app/App/USER_UPDATE_CURRENT';

  export const USER_SIGNUP = 'app/App/USER_SIGNUP';
  export const USER_SIGNUP_SUCCESS = 'app/App/USER_SIGNUP_SUCCESS';
  export const USER_SIGNUP_FAIL = 'app/App/USER_SIGNUP_FAIL';

  export const USER_LOGOUT = 'app/App/USER_LOGOUT';
  export const USER_LOGOUT_SUCCESS = 'app/App/USER_LOGOUT_SUCCESS';
  export const USER_LOGOUT_FAIL = 'app/App/USER_LOGOUT_FAIL';

  export const CHECK_IF_VERIFIED = 'app/App/CHECK_IF_VERIFIED';
  export const USER_SEND_VERIFICATION = 'app/App/USER_SEND_VERIFICATION';
  export const USER_SEND_VERIFICATION_SUCCESS = 'app/App/USER_SEND_VERIFICATION_SUCCESS';
  export const USER_SEND_VERIFICATION_FAIL = 'app/App/USER_SEND_VERIFICATION_FAIL';

  export const LOAD_FORM = 'app/App/LOAD_FORM';
  export const LOAD_FORM_SUCCESS = 'app/App/LOAD_FORM_SUCCESS';
  export const LOAD_FORM_FAIL = 'app/App/LOAD_FORM_FAIL';

  export const UPDATE_FORM = 'app/App/UPDATE_FORM';
  export const UPDATE_FORM_SUCCESS = 'app/App/UPDATE_FORM_SUCCESS';
  export const UPDATE_FORM_FAIL = 'app/App/UPDATE_FORM_FAIL';

  export const UPLOAD_FILE_FORM = 'app/App/UPLOAD_FILE_FORM';
  export const UPLOAD_FILE_FORM_SUCCESS = 'app/App/UPLOAD_FILE_FORM_SUCCESS';
  export const UPLOAD_FILE_FORM_FAIL = 'app/App/UPLOAD_FILE_FORM_FAIL';

  export const UPLOAD_IMAGE = 'app/App/UPLOAD_IMAGE';
  export const UPLOAD_IMAGE_SUCCESS = 'app/App/UPLOAD_IMAGE_SUCCESS';
  export const UPLOAD_IMAGE_FAIL = 'app/App/UPLOAD_IMAGE_FAIL';

  export const HIDE_NOTIFICATION = 'app/App/HIDE_NOTIFICATION';
