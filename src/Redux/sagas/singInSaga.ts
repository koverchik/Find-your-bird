import { put } from 'redux-saga/effects';
import { signInSuccess } from '../action/auth';
import { SignInAction } from '../action/auth/types';

export function* singInSaga(action: SignInAction) {
  yield put(signInSuccess(action.payload));
}
