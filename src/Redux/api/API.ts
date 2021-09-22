import axios from 'axios';
import { MapCircleProps } from 'react-native-maps';
import { Coordinates, ResponseDetailsAirport, ResponseItemsAirports } from './type';
import Config from 'react-native-config';

const BASE_URL = 'https://aerodatabox.p.rapidapi.com/';
const X_REPAID_API_KEY = 'b3717f04c0msheae92615efbb217p1d5e25jsn08c458921e8f';

export const apiCreate = (baseURL: string = BASE_URL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
      'x-rapidapi-key': X_REPAID_API_KEY,
    },
  });

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
