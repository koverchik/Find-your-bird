import { RootState } from '../store';

export const getAuth = (store: RootState) => {
  return store.auth;
};

export const getCities = (store: RootState) => {
  return store.cities;
};
