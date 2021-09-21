import { InitialFavoriteAirports } from '@redux/reducer/types';
import {
  FavoriteAirportsActionsType,
  FavoriteAirportsTypes,
} from '@redux/action/favoriteAirpots/types';

export const initialFavoriteAirportsState: InitialFavoriteAirports = {
  favoriteAirports: [],
};

export const favoriteAirports = (
  state = initialFavoriteAirportsState,
  action: FavoriteAirportsActionsType,
) => {
  switch (action.type) {
    case FavoriteAirportsTypes.ADD_FAVORITE_AIRPORT:
      console.log('ADD_FAVORITE_AIRPORT');
      return {
        ...state,
        favoriteAirports: [],
      };
    case FavoriteAirportsTypes.GET_FAVORITE_AIRPORTS:
      console.log('GET_FAVORITE_AIRPORTS');
      return {
        ...state,
        favoriteAirports: [],
      };
    default:
      return state;
  }
};
