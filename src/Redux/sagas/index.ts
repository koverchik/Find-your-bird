import { takeLatest } from 'redux-saga/effects';
import { GetAirportsTypes } from '../action/airports/types';
import { singOutSaga } from './singOutSaga';
import { singInSaga } from './singInSaga';
import { uploadIconSaga } from './uploadIconSaga';
import { airportsListSaga } from './airportsList';
import { AuthTypes } from '../action/auth/types';

export function* rootSaga() {
  yield takeLatest(AuthTypes.SING_IN, singInSaga);
  yield takeLatest(AuthTypes.SING_OUT, singOutSaga);
  yield takeLatest(AuthTypes.UPLOAD_ICON, uploadIconSaga);
  yield takeLatest(GetAirportsTypes.REQUEST_LIST_AIRPORTS, airportsListSaga);
}
