import { initialDetailsAirportStateTypes } from '../reducer/types';
import { RootState } from '../store';

export const getAuth = (store: RootState) => {
  return store.auth;
};

export const getAirports = (store: RootState) => {
  return store.airports;
};

export const getDetailsAirport = (store: RootState) => {
  return store.airportDetails;
};
