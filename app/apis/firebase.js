import 'whatwg-fetch';
import { fromJS } from 'immutable';
import fakeData from './fakeData';

const delay = (resolve, result, time = 1000) => setTimeout(() => resolve(result), time);

const getRandomTime = (times = 1000) => Math.ceil(Math.random() * times);

const getDelaySuccessPromise = (result, time) => new Promise((resolve) => {
  delay(resolve, result, time);
}).then(() => Promise.resolve(result));

const getDelayFailPromise = (result, time) => new Promise((resolve) => {
  delay(resolve, result, time);
}).then(() => Promise.reject(result));

export function signInWithEmailAndPassword(user) {
  const users = Object.values(fakeData.users);
  const result = users.find((item) => item.email === user.email && item.password === user.password);
  if (result) {
    return getDelaySuccessPromise(result, getRandomTime(500));
  }

  return getDelayFailPromise({
    message: 'Error: The password is invalid or the user does not have a password.',
  });
}

export function signUpAndSendEmailVerify(user) {
  const users = Object.values(fakeData.users);
  const result = users.find((item) => item.email === user.email);
  if (result) {
    return getDelayFailPromise({
      message: 'The email address is already in use by another account.',
    });
  }

  return getDelaySuccessPromise();
}

export function signOut() {
  return getDelaySuccessPromise();
}

export function sendVerificationEmail(user) {
  const users = Object.values(fakeData.users);
  const result = users.find((item) => item.email === user.email);
  if (result) {
    return getDelaySuccessPromise();
  }

  return getDelayFailPromise({
    message: 'The email address has not been sign.',
  });
}

export function initAuth() {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    return Promise.reject({
      message: 'Error: User does not login',
    });
  }
  const users = Object.values(fakeData.users);
  const result = users.find((item) => item.accessToken === accessToken);
  if (result) {
    return Promise.resolve(result);
  }

  return Promise.reject({
    message: 'Error: User Login time is expire.',
  });
}

export function loadForm(firebaseEndPoint) {
  const path = firebaseEndPoint.join('/');
  return Promise.resolve(fromJS(path));
}

export function updateForm(formObject, firebaseEndPoint) {
  const path = firebaseEndPoint.join('/');
  return getDelaySuccessPromise(path);
}

export function setForm(formObject, firebaseEndPoint) {
  const path = firebaseEndPoint.join('/');
  return getDelaySuccessPromise(path);
}

export function loadMyAccount(user) {
  return getDelaySuccessPromise(user, getRandomTime());
}

export function getSingleProduct(productId) {
  return getDelaySuccessPromise(fromJS(fakeData.products[productId]));
}

export function loadProducts() {
  return getDelaySuccessPromise(fromJS(fakeData.products));
}
