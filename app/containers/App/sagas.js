import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fromJS } from 'immutable';
import * as FirebaseApi from 'apis/firebase';
import { getSameBoolean } from 'utils/helpers';

import {
  loggedInByUserAction, checkIfVerifiedAction, loggedInByUserFailAction, updateCurrUserAction,
  signupUserSuccessAction, signupUserFailAction,
  loggedOutByUserAction, loggedOutByUserFailAction,
  userSendVerificationSuccessAction, userSendVerificationFailAction,

  loadFormSuccessAction, loadFormFailAction,
  updateFormSuccessAction, updateFormFailAction,
  uploadFileFormSuccessAction, uploadFileFormFailAction,
  uploadImageSuccessAction, uploadImageFailAction,
} from './actions';
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP,
  USER_LOGOUT,
  USER_SEND_VERIFICATION,

  LOAD_FORM,
  UPDATE_FORM,
  UPLOAD_FILE_FORM,
  UPLOAD_IMAGE,
 } from './constants';

export function* loginByUser(action) {
  try {
    const authUser = yield call(FirebaseApi.signInWithEmailAndPassword, action.user);
    // not until email verification is checked.
    if (getSameBoolean(authUser.emailVerified)) {
      yield put(loggedInByUserAction(authUser));
      const preRoutePath = sessionStorage.getItem('preRoutePath');
      if (!preRoutePath || typeof preRoutePath !== 'string' || preRoutePath === '/login') {
        yield put(push('/'));
      } else {
        yield put(push(preRoutePath));
      }
      yield sessionStorage.removeItem('preRoutePath');
    } else {
      yield put(checkIfVerifiedAction(authUser));
    }
  } catch (err) {
    yield put(loggedInByUserFailAction(err));
  }
}
export function* loggedInByUser(action) {
  try {
    const authUser = action.user;
    yield put(updateCurrUserAction(authUser.uid));
  } catch (err) {
    yield put(loggedInByUserFailAction(err));
  }
}
export function* signupUser(action) {
  const { email, password, isCompanyUser, enterpriseName } = action.user;
  const userInfo = { email, password, isCompanyUser };
  if (isCompanyUser) {
    userInfo.enterpriseName = enterpriseName;
  }
  try {
    yield call(FirebaseApi.signUpAndSendEmailVerify, userInfo);
    yield put(signupUserSuccessAction());
  } catch (err) {
    yield put(signupUserFailAction(err));
  }
}
export function* logoutByUser() {
  try {
    yield call(FirebaseApi.signOut);
    yield put(loggedOutByUserAction());
    yield put(push('/login'));
  } catch (err) {
    yield put(loggedOutByUserFailAction(err));
  }
}
export function* sendUserVerification(action) {
  try {
    yield call(FirebaseApi.sendVerificationEmail, action.user);
    yield put(userSendVerificationSuccessAction());
  } catch (err) {
    yield put(userSendVerificationFailAction(err));
  }
}

export function* loadForm(action) {
  try {
    const results = yield call(FirebaseApi.loadForm, action.firebaseEndPoint);
    yield put(loadFormSuccessAction(fromJS(results), action.firebaseEndPoint, action.reduxEndPoint));
  } catch (err) {
    yield put(loadFormFailAction(err));
  }
}
export function* updateForm(action) {
  try {
    const form = action.formMap.toJS();
    if (form instanceof Array) {
      yield call(FirebaseApi.setForm, form, action.firebaseEndPoint);
    } else {
      yield call(FirebaseApi.updateForm, form, action.firebaseEndPoint);
    }
    if (action.alertMessages && action.alertMessages.success) {
      const { title, message, type } = action.alertMessages.success;
      window.alert(title, message, type);
    }
    yield put(updateFormSuccessAction(action.formMap, action.firebaseEndPoint, action.reduxEndPoint));
  } catch (err) {
    if (action.alertMessages && action.alertMessages.fail) {
      const { title, message, type } = action.alertMessages.fail;
      window.alert(title, message, type);
    }
    yield put(updateFormFailAction(err));
  }
}
export function* uploadFileFormToS3(action) {
  try {
    const results = yield call(Amazons3Api.uploadFile, action.fileName, action.fileBlob);
    yield put(uploadFileFormSuccessAction(action.reduxEndPoint, action.fieldName, results.Location));
  } catch (err) {
    yield put(uploadFileFormFailAction(err));
  }
}
export function* uploadImageToS3(action) {
  try {
    const results = yield call(Amazons3Api.uploadFile, `users/${action.userId}/${action.filePath}`, action.fileBlob);
    yield put(uploadImageSuccessAction(action.userId, results.Location));
  } catch (err) {
    yield put(uploadImageFailAction(err));
  }
}

export function* watchLogin() {
  yield takeLatest(USER_LOGIN, loginByUser);
}
export function* watchLoggedIn() {
  yield takeLatest(USER_LOGIN_SUCCESS, loggedInByUser);
}
export function* watchSignup() {
  yield takeLatest(USER_SIGNUP, signupUser);
}
export function* watchLogout() {
  yield takeLatest(USER_LOGOUT, logoutByUser);
}
export function* watchResendVerification() {
  yield takeLatest(USER_SEND_VERIFICATION, sendUserVerification);
}

export function* watchLoadForm() {
  yield takeLatest(LOAD_FORM, loadForm);
}
export function* watchUpdateForm() {
  yield takeLatest(UPDATE_FORM, updateForm);
}
export function* watchUploadFileForm() {
  yield takeLatest(UPLOAD_FILE_FORM, uploadFileFormToS3);
}
export function* watchUpload() {
  yield takeLatest(UPLOAD_IMAGE, uploadImageToS3);
}

export function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield [
    watchLogin(),
    watchSignup(),
    watchLogout(),
    watchResendVerification(),

    watchLoadForm(),
    watchUpdateForm(),
    watchUploadFileForm(),
    watchUpload(),
  ];
}

export default [
  {
    key: 'rootSaga',
    saga: rootSaga,
  },
];
