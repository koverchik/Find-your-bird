import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import { call, put } from 'redux-saga/effects';
import { refreshTokenSuccess } from '../action/auth';

export function* refreshTokenSaga() {
  const dataUser: User = yield call(GoogleSignin.signInSilently);
  if (dataUser.idToken) {
    yield put(refreshTokenSuccess(dataUser.idToken));
  }
}
