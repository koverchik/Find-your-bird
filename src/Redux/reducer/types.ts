import { AirportsListTypes, ResponseDetailsAirport } from '../api/type';

export type InitialStateAuthType = {
  lastName: string;
  firstName: string;
  email: string;
  userIcon: string;
  idToken: string;
  loggedIn: boolean;
};
export type StateAuthType = {
  lastName: string;
  firstName: string;
  email: string;
  userIcon: string;
  idToken: string;
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
