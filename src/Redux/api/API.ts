import axios, { AxiosResponse } from 'axios';
import { MapCircleProps } from 'react-native-maps';
import { Coordinates, ResponseItemsAirports } from './type';

const BASE_URL = 'https://aerodatabox.p.rapidapi.com/';
const X_REPAID_API_KEY = '97500c194fmsh9856d08c53dc17fp15f399jsn23de4a6fddd8';

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

  return { getAirportsList };
};
