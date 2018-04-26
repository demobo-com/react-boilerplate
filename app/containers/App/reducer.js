/*
 *
 * LoginPage reducer
 *
 */

 import { fromJS } from 'immutable';
 import {
   USER_LOGIN,
   USER_LOGIN_SUCCESS,
   USER_LOGIN_FAIL,

   USER_SIGNUP,
   USER_SIGNUP_SUCCESS,
   USER_SIGNUP_FAIL,

   USER_LOGOUT,
   USER_LOGOUT_SUCCESS,
   USER_LOGOUT_FAIL,

   CHECK_IF_VERIFIED,
   USER_SEND_VERIFICATION,
   USER_SEND_VERIFICATION_SUCCESS,
   USER_SEND_VERIFICATION_FAIL,

   HIDE_NOTIFICATION,

 } from './constants';

 const initialState = fromJS({
   done: true,
   error: false,
   msg: '',
   showResend: false,
   showNotification: false,
   isLoading: false,
 });

 export function appReducer(state = initialState, action) {
   switch (action.type) {
     case USER_LOGIN: {
       return state
               .set('done', false)
               .set('error', false)
               .set('msg', '')
               .set('authUser', '')
               .set('users', fromJS({}))
               .set('showResend', false)
               .set('showNotification', true);
     }
     case USER_LOGIN_SUCCESS: {
       if (action.user.accessToken) localStorage.setItem('accessToken', action.user.accessToken);
       if (action.user.refreshToken) localStorage.setItem('refreshToken', action.user.refreshToken);
       const user = { ...action.user };
       delete user.accessToken;
       delete user.refreshToken;
       return state.set('done', true)
                   .set('error', false)
                   .set('msg', 'Login in success!')
                   .set('authUser', action.user.uid)
                   .setIn(['users', action.user.uid], fromJS(user));
     }
     case USER_LOGIN_FAIL: {
       localStorage.removeItem('accessToken');
       localStorage.removeItem('refreshToken');
       return state.set('done', true)
                   .set('error', true)
                   .set('msg', action.error.message);
     }

     case USER_SIGNUP: {
       return state
               .set('done', false)
               .set('error', false)
               .set('msg', '')
               .set('showNotification', true);
     }
     case USER_SIGNUP_SUCCESS:
       return state
               .set('done', true)
               .set('error', false)
               .set('msg', 'Sign up success! Please visit your email to verify.');
     case USER_SIGNUP_FAIL:
       return state
               .set('done', true)
               .set('error', true)
               .set('msg', action.error.message);

     case USER_LOGOUT: {
       localStorage.removeItem('accessToken');
       localStorage.removeItem('refreshToken');
       sessionStorage.removeItem('preRoutePath');
       return state
               .set('logoutDone', false)
               .set('error', '');
     }
     case USER_LOGOUT_SUCCESS: {
       return initialState;
     }
     case USER_LOGOUT_FAIL:
       return state
               .set('logoutDone', true)
               .set('error', action.error.message);

     case CHECK_IF_VERIFIED:
       return state.set('done', true)
                   .set('error', true)
                   .set('msg', 'Email is not verified, please click below button to verify your email address.')
                   .set('showResend', true);
     case USER_SEND_VERIFICATION:
       return state.set('done', false)
                   .set('error', false)
                   .set('msg', '')
                   .set('showNotification', true);
     case USER_SEND_VERIFICATION_SUCCESS:
       return state.set('done', true)
                   .set('error', false)
                   .set('msg', 'Verification email sent, please check your email.')
                   .set('showResend', false);
     case USER_SEND_VERIFICATION_FAIL:
       return state.set('done', true)
                   .set('error', true)
                   .set('msg', action.error.message);

     case HIDE_NOTIFICATION:
       return state.set('done', true)
                 .set('error', false)
                 .set('msg', '')
                 .set('showNotification', false);

     default:
       return state;
   }
 }

 export default appReducer;
