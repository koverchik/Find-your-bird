import { AirportsListTypes } from '@redux/api/type';

export enum FavoriteAirportsTypes {
  GET_FAVORITE_AIRPORTS = 'GET_FAVORITE_AIRPORTS',
  ADD_FAVORITE_AIRPORT = 'GET_FAVORITE_AIRPORT',
  ADD_FAVORITE_AIRPORT_SUCCESS = 'ADD_FAVORITE_AIRPORT_SUCCESS',
}

export type AddFavoriteAirportsType = {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT;
  payload: AirportsListTypes;
};

export type GetFavoriteAirportsType = {
  type: FavoriteAirportsTypes.GET_FAVORITE_AIRPORTS;
  payload: [];
};

export type AddFavoriteAirportsActionType = (payload: AirportsListTypes) => {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT;
  payload: AirportsListTypes;
};

export type AddFavoriteAirportsActionSuccessType = (payload: AirportsListTypes) => {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT_SUCCESS;
  payload: AirportsListTypes;
};

export type FavoriteAirportsActionsType = AddFavoriteAirportsType | GetFavoriteAirportsType;
