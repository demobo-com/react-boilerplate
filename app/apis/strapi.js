// Utils
// import FormData from 'form-data';
import request from 'utils/request';
import {
  getStrapiBase,
  getErrorMessage,
} from 'utils/helpers';
import fakeData from './fakeData';

const STRAPI_BASE = getStrapiBase();

function reportFetchError(err, isAlert, type) {
  if (isAlert) window.alert(getErrorMessage(err), type);
  return Promise.reject(err);
}
function requestWithAlert(url, options, isAlert = true, type = 'error') {
  return request(url, options)
    .catch((err) => reportFetchError(err, isAlert, type));
}

// Note: endpoint is singular and all small case, endpoint can include url parameters
export function getStrapi(endpoint, headers = {}, isAlert = true, type = 'warning') {
  const url = `${STRAPI_BASE}/api/${endpoint}`;
  return requestWithAlert(url, {
    method: 'GET',
    headers,
  }, isAlert, type);
}
export function createStrapi(endpoint, body, headers = {}, isAlert, type) {
  const url = `${STRAPI_BASE}/api/${endpoint}`;
  return requestWithAlert(url, {
    method: 'POST',
    headers,
    body,
  }, isAlert, type);
}
export function updateStrapi(endpoint, body, headers = {}, isAlert, type) {
  const url = `${STRAPI_BASE}/api/${endpoint}`;
  return requestWithAlert(url, {
    method: 'PUT',
    headers,
    body,
  }, isAlert, type);
}
export function deleteStrapi(endpoint, headers = {}, isAlert, type) {
  const url = `${STRAPI_BASE}/api/${endpoint}`;
  return requestWithAlert(url, {
    method: 'DELETE',
    headers,
  }, isAlert, type);
}

export function loadForm(path) {
  return getStrapi(path);
}
export function updateForm(formObject, path) {
  return updateStrapi(path, formObject);
}
export function setForm(formObject, path) {
  return createStrapi(path, formObject);
}

export function signInWithEmailAndPassword(user) {
  const url = `${STRAPI_BASE}/auth/local`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      identifier: user.email,
      password: user.password,
    },
  });
}
export function logInByJwtToken() {
  return getStrapi('profile');
}
export function signUpAndSendEmailVerify(user) {
  const url = `${STRAPI_BASE}/auth/local/register`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      country: user.country,

      isEnterpriseUser: user.isEnterpriseUser,
      companyName: user.companyName || null,
      firstName: user.firstName || null,
      lastName: user.lastName || null,

      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
    },
  });
}
// TODO: strapi does not have signout, may need a signout api in future
export function signOut() {
  // const url = `${STRAPI_BASE}/auth/local/signout`;
  // return request(url, {
  //   method: 'POST',
  // });
  return Promise.resolve();
}

export function forgetUserPassword(email) {
  const url = `${STRAPI_BASE}/auth/forgot-password`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      email,
      url: `${location.origin}/forgetPassword/step3`, // TODO link
    },
  });
}
// TODO: strapi does not have changeUserPassword, use resetUserPassword for now
export function changeUserPassword() {
  // const url = `${STRAPI_BASE}/auth/change-password`;
  // return request(url, {
  //   method: 'POST',
  //   body: {
  //     oldPassword,
  //     password: newPassword,
  //     passwordConfirmation: newPassword,
  //   },
  // });
  return Promise.resolve();
}
export function resetUserPassword(code, password, passwordConfirmation) {
  const url = `${STRAPI_BASE}/auth/reset-password`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      code,
      password,
      passwordConfirmation,
    },
  });
}

export function uploadProfileFile(authUserId, field, fileBuffer) {
  const body = new FormData();
  body.append('ref', 'Profile');
  body.append('refId', authUserId);
  body.append('field', field);
  body.append('files', fileBuffer);

  const url = `${STRAPI_BASE}/upload`;
  return requestWithAlert(url, {
    method: 'POST',
    body,
    isFormData: true,
  });
}
export function deleteProfileFile(fileId) {
  const url = `${STRAPI_BASE}/files/${fileId}`;
  return requestWithAlert(url, {
    method: 'DELETE',
  });
}


// TODO delete
const delay = (resolve, result, time = 1000) => setTimeout(() => resolve(result), time);
const getRandomTime = (times = 1000) => Math.ceil(Math.random() * times);
const getDelaySuccessPromise = (result, time) => new Promise((resolve) => {
  delay(resolve, result, time);
}).then(() => Promise.resolve(result));

export function loadMyAccount(user) {
  return getDelaySuccessPromise(user, getRandomTime());
}
export function loadProducts() {
  return getDelaySuccessPromise(fakeData.products);
}
export function getSingleProduct(productId) {
  return getDelaySuccessPromise(fakeData.products[productId]);
}
