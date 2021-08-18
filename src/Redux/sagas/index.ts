import { put, takeLatest } from 'redux-saga/effects';
import { signInSuccess, signOutSuccess, SingInActionType } from '../action/index';
import { AuthTypes, SignInAction } from '../action/types';

function* singInSaga(action: SignInAction) {
  yield put(signInSuccess(action.payload));
}

function* singOutSaga() {
  yield put(signOutSuccess());
}

export function* rootSaga() {
  yield takeLatest(AuthTypes.SING_IN, singInSaga);
  yield takeLatest(AuthTypes.SING_OUT, singOutSaga);
}
