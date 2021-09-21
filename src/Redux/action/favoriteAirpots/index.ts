import {
  AddFavoriteAirportsActionSuccessType,
  AddFavoriteAirportsActionType,
  DeleteFavoriteAirportsActionType,
  DeleteFavoriteAirportType,
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

export const deleteFavoriteAirport: DeleteFavoriteAirportType = (payload) => {
  return {
    type: FavoriteAirportsTypes.DELETE_FAVORITE_AIRPORT,
    payload,
  };
};

export const deleteFavoriteAirportAction: DeleteFavoriteAirportsActionType = (payload) => {
  return {
    type: FavoriteAirportsTypes.DELETE_FAVORITE_AIRPORT_ACTION,
    payload,
  };
};
