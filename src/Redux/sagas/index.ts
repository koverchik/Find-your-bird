import { all, spawn, takeLatest } from 'redux-saga/effects';
import { GetAirportsTypes } from '../action/airports/types';
import { singOutSaga } from './singOutSaga';
import { singInSaga } from './singInSaga';
import { uploadIconSaga } from './uploadIconSaga';
import { airportsListSaga } from './airportsListSaga';
import { AuthTypes } from '../action/auth/types';
import { GetAirportDetailsTypes } from '../action/airportDetails/types';
import { airportDetailsSaga } from './airportDetailsSaga';
import { FavoriteAirportsTypes } from '@redux/action/favoriteAirpots/types';
import { favoriteAirportSaga } from '@redux/sagas/favoriteAirportSaga';
import { deleteFavoriteAirportSaga } from '@redux/sagas/deleteFavoriteAirportSaga';
import { refreshTokenSaga } from './refreshToken';

export function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.REFRESH_TOKEN, refreshTokenSaga),
    takeLatest(AuthTypes.SING_IN, singInSaga),
    takeLatest(AuthTypes.SING_OUT, singOutSaga),
    takeLatest(AuthTypes.UPLOAD_ICON, uploadIconSaga),
    takeLatest(GetAirportsTypes.REQUEST_LIST_AIRPORTS, airportsListSaga),
    takeLatest(GetAirportDetailsTypes.REQUEST_DETAILS_AIRPORT, airportDetailsSaga),
    takeLatest(FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT, favoriteAirportSaga),
    takeLatest(FavoriteAirportsTypes.GET_FAVORITE_AIRPORTS, deleteFavoriteAirportSaga),
  ]);
}
