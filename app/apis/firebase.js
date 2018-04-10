import 'whatwg-fetch';
import {
  getRandomString,
  optionsPost,
  optionsGet,
  isValidFirebaseEndPoint,
} from 'utils/helpers';
import queryString from 'query-string';
import { toLower } from 'lodash';
import { CLOUD_BASE } from 'firebase-config';

const deviceID = localStorage.getItem('deviceID') || getRandomString();
localStorage.setItem('deviceID', deviceID);

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  return response.json().then((json) => {
    const error = new Error(json.message || response.statusText);
    error.response = response;
    throw error;
  });
}

function reportFetchError(err) {
  console.warn(err);
  if (toLower(err).includes('invalid') && toLower(err).includes('token')) {
    window.location = '/login';
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
  return Promise.reject(err);
}

function request(url, options = optionsGet) {
  const noCache = Math.random();
  const randomUrl = url.includes('?') ?
        `${url}&noCache=${noCache}` :
        `${url}?noCache=${noCache}`;
  return fetch(randomUrl, options)
    .then(checkStatus)
    .then(parseJSON);
}

function requestWithAccessToken(url, requestOptions = optionsPost(), noAlert) {
  const accessToken = localStorage.getItem('accessToken');
  const options = requestOptions;
  const fetchRequest = () => {
    if (options.method === 'POST') {
      if (options.body) options.body += `&accessToken=${accessToken}&source=${deviceID}`;
      else options.body = `accessToken=${accessToken}&source=${deviceID}`;
      return fetch(url, options);
    }
    const tokenUrl = url.includes('?') ?
      `${url}&accessToken=${accessToken}&source=${deviceID}` :
      `${url}?accessToken=${accessToken}&source=${deviceID}`;
    return fetch(tokenUrl, options);
  };
  return fetchRequest()
    .then((response) => checkStatus(response, noAlert))
    .then(parseJSON);
}

function requestWithRefreshToken(url, requestOptions = optionsPost(), noAlert) {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const options = requestOptions;
  const fetchRequest = () => {
    if (options.method === 'POST') {
      if (options.body) options.body += `&accessToken=${accessToken}&refreshToken=${refreshToken}&source=${deviceID}`;
      else options.body = `accessToken=${accessToken}&refreshToken=${refreshToken}&source=${deviceID}`;
      return fetch(url, options);
    }
    const tokenUrl = url.includes('?') ?
      `${url}&accessToken=${accessToken}&refreshToken=${refreshToken}&source=${deviceID}` :
      `${url}?accessToken=${accessToken}&refreshToken=${refreshToken}&source=${deviceID}`;
    return fetch(tokenUrl, options);
  };
  return fetchRequest()
    .then((response) => checkStatus(response, noAlert))
    .then(parseJSON);
}

export const get = (path) => {
  if (!isValidFirebaseEndPoint(path)) { return Promise.reject('Invalid Firebase Endpoint'); }
  const url = `${CLOUD_BASE}/database/get`;
  const options = optionsPost({
    path,
  });
  return requestWithAccessToken(url, options).catch(reportFetchError);
};

export const update = (path, data) => {
  if (!isValidFirebaseEndPoint(path)) {
    return Promise.reject('Invalid Firebase Endpoint');
  }
  const url = `${CLOUD_BASE}/database/update`;
  const options = optionsPost({
    path,
    stringifiedData: JSON.stringify(data),
  });
  return requestWithAccessToken(url, options).catch(reportFetchError);
};

const set = (path, data) => {
  if (!isValidFirebaseEndPoint(path)) {
    return Promise.reject('Invalid Firebase Endpoint');
  }
  const url = `${CLOUD_BASE}/database/set`;
  const options = optionsPost({
    path,
    stringifiedData: JSON.stringify(data),
  });
  return requestWithAccessToken(url, options).catch(reportFetchError);
};

export const remove = (path) => {
  if (!isValidFirebaseEndPoint(path)) {
    return Promise.reject('Invalid Firebase Endpoint');
  }
  const url = `${CLOUD_BASE}/database/remove`;
  const options = optionsPost({
    path,
  });
  return requestWithAccessToken(url, options).catch(reportFetchError);
};

export function initAuth() {
  const url = `${CLOUD_BASE}/user/initAuth`;
  return requestWithRefreshToken(url, optionsPost(), true).catch(reportFetchError);
}

export function sendVerificationEmail(user) {
  const url = `${CLOUD_BASE}/user/sendVerificationEmail`;
  return requestWithAccessToken(url, optionsPost({ email: user.email })).catch(reportFetchError);
}

export function signUpAndSendEmailVerify(user) {
  const url = `${CLOUD_BASE}/user/signUpAndSendEmailVerify`;
  return request(url, optionsPost(user));
}

export function signInWithEmailAndPassword(user) {
  const url = `${CLOUD_BASE}/user/signInWithEmailAndPassword`;
  return requestWithAccessToken(url, optionsPost(user)).catch(reportFetchError);
}

// TODO: needs to be more secure and uses requestWithAccessToken. change and Test
export function forgetUserPassword(user) {
  const url = `${CLOUD_BASE}/user/sendResetPasswordEmail`;
  const options = optionsPost({ email: user.email });
  return request(url, options);
}

export function changeUserPassword(oldPassword, newPassword) {
  const url = `${CLOUD_BASE}/user/resetPassword`;
  const options = optionsPost({ oldPassword, newPassword });
  return requestWithAccessToken(url, options).catch(reportFetchError);
}

export function resetUserPassword(confirmationCode, email, password) {
  const url = `${CLOUD_BASE}/user/resetPasswordByConfirmationCode`;
  const options = optionsPost({ confirmationCode, email, password });
  return request(url, options);
}

export function signOut() {
  const url = `${CLOUD_BASE}/user/signOut`;
  return requestWithAccessToken(url).catch(reportFetchError);
}

export function getUserProfile(uid) {
  const path = `users/${uid}`;
  return get(path);
}

export function updateForm(formObject, firebaseEndPoint) {
  const path = firebaseEndPoint.join('/');
  return update(path, formObject);
}

export function setForm(formObject, firebaseEndPoint) {
  const path = firebaseEndPoint.join('/');
  return set(path, formObject);
}

export function loadForm(firebaseEndPoint) {
  const path = firebaseEndPoint.join('/');
  return get(path);
}

export function updateUserProfile(uid, formObject) {
  const path = `users/${uid}`;
  return update(path, formObject);
}

export function createUserWithEmailAndPassword(user) {
  const url = `${CLOUD_BASE}/signUp`;
  return request(url, optionsPost(user));
}
