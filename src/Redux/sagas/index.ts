import { takeLatest } from 'redux-saga/effects';
import { GetAirportsTypes, AuthTypes } from '../action/types';
import { singOutSaga } from './singOutSaga';
import { singInSaga } from './singInSaga';
import { uploadIconSaga } from './uploadIconSaga';
import { airportsListSaga } from './airportsList';

export function* rootSaga() {
  yield takeLatest(AuthTypes.SING_IN, singInSaga);
  yield takeLatest(AuthTypes.SING_OUT, singOutSaga);
  yield takeLatest(AuthTypes.UPLOAD_ICON, uploadIconSaga);
  yield takeLatest(GetAirportsTypes.REQUEST_LIST_AIRPORTS, airportsListSaga);
}
