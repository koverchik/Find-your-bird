import axios from 'axios';
import { MapCircleProps } from 'react-native-maps';
import { Coordinates, ResponseDetailsAirport, ResponseItemsAirports } from './type';
import Config from 'react-native-config';
import { timeExpToken } from '../sagas/helpers';
import { store } from '../store';
import { tokenRefresh } from '../action/auth';

const BASE_URL = 'https://aerodatabox.p.rapidapi.com/';

export const apiCreate = (baseURL: string = BASE_URL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
      'x-rapidapi-key': Config.API_KEY,
    },
  });

  instance.interceptors.request.use((config) => {
    const { auth } = store.getState();
    if (timeExpToken(auth.idToken)) {
      store.dispatch(tokenRefresh());
    }
    return config;
  }, undefined);

  const getAirportsList = (radius: MapCircleProps['radius'], coordinates: Coordinates) => {
    return instance.get<ResponseItemsAirports>(
      `airports/search/location/${coordinates.latitude}/${coordinates.longitude}/km/${radius}/16`,
    );
  };

  const getDetailsAirport = (payload: string) => {
    return instance.get<ResponseDetailsAirport>(`airports/iata/${payload}`);
  };

  return { getAirportsList, getDetailsAirport };
};
