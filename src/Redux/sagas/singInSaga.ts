import { put } from 'redux-saga/effects';
import { SignInAction } from '../action/auth/types';
import { signInSuccess } from '../action/auth';

export function* singInSaga(action: SignInAction) {
  yield put(signInSuccess(action.payload));
}
