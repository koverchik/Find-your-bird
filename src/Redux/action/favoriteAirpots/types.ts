import { AirportsListTypes } from '@redux/api/type';

export enum FavoriteAirportsTypes {
  GET_FAVORITE_AIRPORTS = 'GET_FAVORITE_AIRPORTS',
  ADD_FAVORITE_AIRPORT = 'GET_FAVORITE_AIRPORT',
  ADD_FAVORITE_AIRPORT_SUCCESS = 'ADD_FAVORITE_AIRPORT_SUCCESS',
  FILTERED_FAVORITE_AIRPORT = 'FILTERED_FAVORITE_AIRPORT',
  DELETE_FAVORITE_AIRPORT_ACTION = 'DELETE_FAVORITE_AIRPORT_ACTION',
}

export type AddFavoriteAirportsType = {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT;
  payload: AirportsListTypes;
};

export type GetFavoriteAirportsType = {
  type: FavoriteAirportsTypes.GET_FAVORITE_AIRPORTS;
  payload: [];
};

export type DeleteFavoriteAirportsType = {
  type: FavoriteAirportsTypes.FILTERED_FAVORITE_AIRPORT;
  payload: AirportsListTypes;
};

export type DeleteFavoriteAirportsActionType = (payload: AirportsListTypes) => {
  type: FavoriteAirportsTypes.DELETE_FAVORITE_AIRPORT_ACTION;
  payload: AirportsListTypes;
};

export type DeleteFavoriteAirportType = (payload: AirportsListTypes) => {
  type: FavoriteAirportsTypes.FILTERED_FAVORITE_AIRPORT;
  payload: AirportsListTypes;
};

export type AddFavoriteAirportsActionType = (payload: AirportsListTypes) => {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT;
  payload: AirportsListTypes;
};

export type AddFavoriteAirportsActionSuccessType = (payload: AirportsListTypes) => {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT_SUCCESS;
  payload: AirportsListTypes;
};

export type FavoriteAirportsActionsType =
  | AddFavoriteAirportsType
  | GetFavoriteAirportsType
  | DeleteFavoriteAirportsType;
