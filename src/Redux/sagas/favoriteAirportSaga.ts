import { put } from 'redux-saga/effects';
import { addFavoriteAirportAction } from '@redux/action/favoriteAirpots';
import { AddFavoriteAirportsType } from '@redux/action/favoriteAirpots/types';

export function* favoriteAirportSaga(action: AddFavoriteAirportsType) {
  yield put(addFavoriteAirportAction(action.payload));
}
