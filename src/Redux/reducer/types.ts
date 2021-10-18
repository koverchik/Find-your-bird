import { User } from '@react-native-google-signin/google-signin';
import { AirportsListTypes, ResponseDetailsAirport } from '../api/type';

export type InitialStateAuthType = {
  lastName: string | null;
  firstName: string | null;
  email: string | null;
  userIcon: string | null;
  idToken: User['idToken'];
  loggedIn: boolean | null;
};

export type InitialStateAirportsTypes = {
  airportsListData: AirportsListTypes[];
  pending: boolean;
  error: null | string;
};

export type InitialDetailsAirportStateTypes = {
  airportData: ResponseDetailsAirport | null;
  pending: boolean;
  error: null | string;
};

export type InitialFavoriteAirports = {
  favoriteAirports: AirportsListTypes[];
};
