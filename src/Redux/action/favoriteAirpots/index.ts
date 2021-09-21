import {
  AddFavoriteAirportsActionSuccessType,
  AddFavoriteAirportsActionType,
  FavoriteAirportsTypes,
} from './types';

export const addFavoriteAirport: AddFavoriteAirportsActionType = (payload) => {
  return {
    type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT,
    payload,
  };
};

export const addFavoriteAirportAction: AddFavoriteAirportsActionSuccessType = (payload) => {
  return {
    type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT_SUCCESS,
    payload,
  };
};
