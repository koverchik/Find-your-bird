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

export const getFavoriteAirport = (store: RootState) => {
  return store.favoriteAirports;
};

export const getVideo = (store: RootState) => {
  return store.video;
};
