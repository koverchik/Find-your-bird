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
      return {
        ...state,
        favoriteAirports: [...state.favoriteAirports, action.payload],
      };
    case FavoriteAirportsTypes.GET_FAVORITE_AIRPORTS:
      console.log('GET_FAVORITE_AIRPORTS');
      return state;

    case FavoriteAirportsTypes.DELETE_FAVORITE_AIRPORT: {
      const result = state.favoriteAirports.filter((item) => {
        if (item.icao != action.payload.icao) {
          return item;
        }
      });
      return {
        ...state,
        favoriteAirports: result,
      };
    }
    default:
      return state;
  }
};
