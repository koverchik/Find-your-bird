import { put } from 'redux-saga/effects';
import { signInSuccess } from '../action';
import { SignInAction } from '../action/types';

export function* singInSaga(action: SignInAction) {
  yield put(signInSuccess(action.payload));
}
