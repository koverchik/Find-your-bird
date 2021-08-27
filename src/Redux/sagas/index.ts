import { takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../action/types';
import { singOutSaga } from './singOutSaga';
import { singInSaga } from './singInSaga';
import { uploadIconSaga } from './uploadIconSaga';

export function* rootSaga() {
  yield takeLatest(AuthTypes.SING_IN, singInSaga);
  yield takeLatest(AuthTypes.SING_OUT, singOutSaga);
  yield takeLatest(AuthTypes.UPLOAD_ICON, uploadIconSaga);
}
