import { put } from 'redux-saga/effects';
import { DeleteFavoriteAirportsType } from '@redux/action/favoriteAirpots/types';
import { deleteFavoriteAirportAction } from '@redux/action/favoriteAirpots';

export function* deleteFavoriteAirportSaga(action: DeleteFavoriteAirportsType) {
  yield put(deleteFavoriteAirportAction(action.payload));
}
