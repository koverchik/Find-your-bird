import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { call, put } from 'redux-saga/effects';
import { signOutSuccess } from '../action/auth';

export function* singOutSaga() {
  yield call(GoogleSignin.signOut);
  yield put(signOutSuccess());
}
