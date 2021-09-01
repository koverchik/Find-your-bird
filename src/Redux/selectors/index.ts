import { RootState } from '../store';

export const getAuth = (store: RootState) => {
  return store.auth;
};

export const getAirports = (store: RootState) => {
  return store.airports;
};
