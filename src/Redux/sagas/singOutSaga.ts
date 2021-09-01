import { put } from 'redux-saga/effects';
import { signOutSuccess } from '../action/auth/index';

export function* singOutSaga() {
  yield put(signOutSuccess());
}
