export enum FavoriteAirportsTypes {
  GET_FAVORITE_AIRPORTS = 'GET_FAVORITE_AIRPORTS',
  ADD_FAVORITE_AIRPORT = 'GET_FAVORITE_AIRPORT',
  ADD_FAVORITE_AIRPORT_SUCCESS = 'ADD_FAVORITE_AIRPORT_SUCCESS',
}

export type AddFavoriteAirportsType = {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT;
  payload: string;
};

export type GetFavoriteAirportsType = {
  type: FavoriteAirportsTypes.GET_FAVORITE_AIRPORTS;
  payload: [];
};

export type AddFavoriteAirportsActionType = (payload: string) => {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT;
  payload: string;
};

export type AddFavoriteAirportsActionSuccessType = (payload: string) => {
  type: FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT_SUCCESS;
  payload: string;
};

export type FavoriteAirportsActionsType = AddFavoriteAirportsType | GetFavoriteAirportsType;
