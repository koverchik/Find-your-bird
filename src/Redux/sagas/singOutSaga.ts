import { put } from 'redux-saga/effects';
import { signOutSuccess } from '../action/index';

export function* singOutSaga() {
  yield put(signOutSuccess());
}
