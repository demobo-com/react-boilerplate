/*
 *
 * App actions
 *
 */

import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,

  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,

  CHECK_IF_VERIFIED,
  USER_SEND_VERIFICATION,
  USER_SEND_VERIFICATION_SUCCESS,
  USER_SEND_VERIFICATION_FAIL,

  LOAD_FORM,
  LOAD_FORM_SUCCESS,
  LOAD_FORM_FAIL,

  UPDATE_FORM,
  UPDATE_FORM_SUCCESS,
  UPDATE_FORM_FAIL,

  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,

  UPLOAD_FILE_FORM,
  UPLOAD_FILE_FORM_SUCCESS,
  UPLOAD_FILE_FORM_FAIL,

  HIDE_NOTIFICATION,
} from './constants';

export function loginByUserAction(user) {
  return {
    type: USER_LOGIN,
    user,
  };
}
export function loggedInByUserAction(user) {
  return {
    type: USER_LOGIN_SUCCESS,
    user,
  };
}
export function loggedInByUserFailAction(error) {
  return {
    type: USER_LOGIN_FAIL,
    error,
  };
}

export function signupUserAction(user) {
  return {
    type: USER_SIGNUP,
    user,
  };
}
export function signupUserSuccessAction() {
  return {
    type: USER_SIGNUP_SUCCESS,
  };
}
export function signupUserFailAction(error) {
  return {
    type: USER_SIGNUP_FAIL,
    error,
  };
}

export function logoutByUserAction() {
  return {
    type: USER_LOGOUT,
  };
}
export function loggedOutByUserAction() {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
}
export function loggedOutByUserFailAction(error) {
  return {
    type: USER_LOGOUT_FAIL,
    error,
  };
}

export function checkIfVerifiedAction(user) {
  return {
    type: CHECK_IF_VERIFIED,
    user,
  };
}
export function userSendVerificationAction(user) {
  return {
    type: USER_SEND_VERIFICATION,
    user,
  };
}
export function userSendVerificationSuccessAction() {
  return {
    type: USER_SEND_VERIFICATION_SUCCESS,
  };
}
export function userSendVerificationFailAction(error) {
  return {
    type: USER_SEND_VERIFICATION_FAIL,
    error,
  };
}

export function loadFormAction(firebaseEndPoint, reduxEndPoint) {
  return {
    type: LOAD_FORM,
    firebaseEndPoint,
    reduxEndPoint,
  };
}
export function loadFormSuccessAction(formMap, firebaseEndPoint, reduxEndPoint) {
  return {
    type: LOAD_FORM_SUCCESS,
    formMap,
    firebaseEndPoint,
    reduxEndPoint,
  };
}
export function loadFormFailAction(error) {
  return {
    type: LOAD_FORM_FAIL,
    error,
  };
}

export function updateFormAction(formMap, firebaseEndPoint, reduxEndPoint, alertMessages) {
  return {
    type: UPDATE_FORM,
    formMap,
    firebaseEndPoint,
    reduxEndPoint,
    alertMessages,
  };
}
export function updateFormSuccessAction(formMap, firebaseEndPoint, reduxEndPoint) {
  return {
    type: UPDATE_FORM_SUCCESS,
    formMap,
    firebaseEndPoint,
    reduxEndPoint,
  };
}
export function updateFormFailAction(error) {
  return {
    type: UPDATE_FORM_FAIL,
    error,
  };
}

export function uploadFileFormAction(fileName, fileBlob, fieldName, reduxEndPoint, firebaseEndPoint) {
  return {
    type: UPLOAD_FILE_FORM,
    fileName,
    fileBlob,
    fieldName,
    reduxEndPoint,
    firebaseEndPoint,
  };
}
export function uploadFileFormSuccessAction(reduxEndPoint, fieldName, fileUrl) {
  return {
    type: UPLOAD_FILE_FORM_SUCCESS,
    reduxEndPoint,
    fieldName,
    fileUrl,
  };
}
export function uploadFileFormFailAction(error) {
  return {
    type: UPLOAD_FILE_FORM_FAIL,
    error,
  };
}

export function uploadImageAction(userId, filePath, fileBlob) {
  return {
    type: UPLOAD_IMAGE,
    userId,
    filePath,
    fileBlob,
  };
}
export function uploadImageSuccessAction(userId, fileUrl) {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    userId,
    fileUrl,
  };
}
export function uploadImageFailAction(error) {
  return {
    type: UPLOAD_IMAGE_FAIL,
    error,
  };
}

export function hideNotificationAction() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
