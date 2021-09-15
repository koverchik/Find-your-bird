import { put } from 'redux-saga/effects';
import { signOutSuccess } from '../action/auth';

export function* singOutSaga() {
  yield put(signOutSuccess());
}
