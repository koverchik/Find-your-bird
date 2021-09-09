import { AirportsListTypes, ResponseDetailsAirport } from '../api/type';

export type InitialStateAuthType = {
  lastName: string;
  firstName: string;
  email: string;
  userIcon: string;
  loggedIn: boolean;
};

export type InitialStateAirportsTypes = {
  airportsListData: AirportsListTypes[];
  pending: boolean;
  error: null | string;
};

export type initialDetailsAirportStateTypes = {
  airportData: ResponseDetailsAirport | null;
  pending: boolean;
  error: null | string;
};
