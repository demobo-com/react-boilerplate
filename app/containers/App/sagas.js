import { all, takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fromJS } from 'immutable';

import auth from 'utils/auth';
import * as StrapiApi from 'apis/strapi';
import {
  loggedInByUserAction, loggedInByUserFailAction,
  signupUserSuccessAction, signupUserFailAction,
  loggedOutByUserAction, loggedOutByUserFailAction,

  loadFormSuccessAction, loadFormFailAction,
  updateFormSuccessAction, updateFormFailAction,
  uploadFileFormSuccessAction, uploadFileFormFailAction,
  uploadImageSuccessAction, uploadImageFailAction,
} from './actions';
import {
  USER_LOGIN,
  USER_LOGIN_JWKTOCKEN,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP,
  USER_LOGOUT,

  LOAD_FORM,
  UPDATE_FORM,
  UPLOAD_FILE_FORM,
  UPLOAD_IMAGE,
 } from './constants';

export function* loginSuccessRedirect() {
  const preRoutePath = auth.get('preRoutePath');
  if (!preRoutePath || typeof preRoutePath !== 'string' || preRoutePath === '/login') {
    linkTo('/');
  } else {
    linkTo(preRoutePath);
  }
  sessionStorage.removeItem('preRoutePath');
}
export function setQuestionnaireFillData(profile) {
  const questionnaireFillData = {
    authUserId: profile.id || profile.user,
    corporateCharter: profile.corporateCharter,
    isQuestionnaireFilled: !!profile.isQuestionnaireFilled,
    isEnterpriseUser: !!profile.isEnterpriseUser,
    country: profile.country,
    email: profile.email,
  };
  auth.set(questionnaireFillData, 'questionnaireFillData');
}

export function* loginByUser(action) {
  try {
    const authUser = yield call(StrapiApi.signInWithEmailAndPassword, action.user);
    const profile = authUser.profile;
    if (!profile.isAuthenticated) {
      let message = '';
      if (!profile.isQuestionnaireFilled) {
        yield call(auth.setToken, authUser.jwt, action.user.rememberMe);
        setQuestionnaireFillData(profile);
        message = window.translate({ label: 'noQuestionnaireFilled' });
      } else {
        message = window.translate({ label: 'noAuthenticatedUser' });
        window.alert(message, 'warning');
      }
      yield put(loggedInByUserFailAction(message));
    } else {
      yield all([
        call(auth.setToken, authUser.jwt, action.user.rememberMe),
        call(auth.set, profile.isAuthenticated.toString(), 'isAuthenticated', action.user.rememberMe),
      ]);
      yield put(loggedInByUserAction(profile));
      yield call(loginSuccessRedirect);
    }
  } catch (err) {
    yield put(loggedInByUserFailAction(err));
  }
}
export function* logInByJwtToken() {
  try {
    const profile = yield call(StrapiApi.logInByJwtToken);
    yield put(loggedInByUserAction(profile));
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
    yield call(StrapiApi.signUpAndSendEmailVerify, userInfo);
    yield put(signupUserSuccessAction());
  } catch (err) {
    yield put(signupUserFailAction(err));
  }
}
export function* logoutByUser() {
  try {
    yield call(StrapiApi.signOut);
    yield put(loggedOutByUserAction());
    yield put(push('/login'));
  } catch (err) {
    yield put(loggedOutByUserFailAction(err));
  }
}

export function* loadForm(action) {
  try {
    const results = yield call(StrapiApi.loadForm, action.firebaseEndPoint);
    yield put(loadFormSuccessAction(fromJS(results), action.firebaseEndPoint, action.reduxEndPoint));
  } catch (err) {
    yield put(loadFormFailAction(err));
  }
}
export function* updateForm(action) {
  try {
    const form = action.formMap.toJS();
    console.log(form);
    yield call(StrapiApi.updateForm, form, action.path);
    if (action.alertMessages && action.alertMessages.success) {
      const { message, type, title } = action.alertMessages.success;
      window.alert(message, type, title);
    }
    yield put(updateFormSuccessAction(action.formMap, action.path, action.reduxEndPoint));
  } catch (err) {
    if (action.alertMessages && action.alertMessages.fail) {
      const { message, type, title } = action.alertMessages.fail;
      window.alert(message, type, title);
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
export function* watchlogInByJwtToken() {
  yield takeLatest(USER_LOGIN_JWKTOCKEN, logInByJwtToken);
}
export function* watchSignup() {
  yield takeLatest(USER_SIGNUP, signupUser);
}
export function* watchLogout() {
  yield takeLatest(USER_LOGOUT, logoutByUser);
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
    watchlogInByJwtToken(),
    watchSignup(),
    watchLogout(),

    watchLoadForm(),
    watchUpdateForm(),
    // watchUploadFileForm(),
    // watchUpload(),
  ];
}

export default [
  {
    key: 'rootSaga',
    saga: rootSaga,
  },
];
