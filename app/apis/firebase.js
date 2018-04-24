import 'whatwg-fetch';
import { fromJS } from 'immutable';
import fakeData from './fakeData';

export function signInWithEmailAndPassword(user) {
  const users = Object.values(fakeData.users);
  const result = users.find((item) => item.email === user.email && item.password === user.password);
  if (result) {
    return Promise.resolve(result);
  }

  return Promise.reject({
    message: 'Error: The password is invalid or the user does not have a password.',
  });
}

export function signUpAndSendEmailVerify(user) {
  const users = Object.values(fakeData.users);
  const result = users.find((item) => item.email === user.email);
  if (result) {
    return Promise.reject({
      message: 'The email address is already in use by another account.',
    });
  }

  return Promise.resolve();
}

export function signOut() {
}

export function sendVerificationEmail(user) {
  const users = Object.values(fakeData.users);
  const result = users.find((item) => item.email === user.email);
  if (result) {
    return Promise.resolve();
  }

  return Promise.reject({
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
  return Promise.resolve(fromJS(path));
}

export function setForm(formObject, firebaseEndPoint) {
  const path = firebaseEndPoint.join('/');
  return Promise.resolve(fromJS(path));
}

export function loadMyAccount(user) {
  const {
    email = '',
    // TODO: we should use uid to retrieve investment data in the future.
    // uid,
  } = user;
  const isValidUser = email.indexOf('@overseascredits.com') > 0;
  if (!isValidUser) return Promise.resolve(fromJS({}));

  return Promise.resolve(fromJS({}));
}

export function getPerformance() {
  return Promise.resolve(fakeData.getPerformance);
}

export function getSingleProduct(productId) {
  console.log(productId);
}

export function loadProducts() {
  return Promise.resolve(fromJS({}));
}
