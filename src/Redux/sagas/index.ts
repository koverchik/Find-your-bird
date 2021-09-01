import { takeLatest } from 'redux-saga/effects';
import { GetCitiesTypes as GetCitiesTypes, AuthTypes } from '../action/types';
import { singOutSaga } from './singOutSaga';
import { singInSaga } from './singInSaga';
import { uploadIconSaga } from './uploadIconSaga';
import { CitiesListSaga } from './citiesList';

export function* rootSaga() {
  yield takeLatest(AuthTypes.SING_IN, singInSaga);
  yield takeLatest(AuthTypes.SING_OUT, singOutSaga);
  yield takeLatest(AuthTypes.UPLOAD_ICON, uploadIconSaga);
  yield takeLatest(GetCitiesTypes.REQUEST_LIST_CITIES, CitiesListSaga);
}
