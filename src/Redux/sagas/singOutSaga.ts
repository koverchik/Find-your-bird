import { signOutSuccess } from './../action/auth';
import { put } from 'redux-saga/effects';

export function* singOutSaga() {
  yield put(signOutSuccess());
}
