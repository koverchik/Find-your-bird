import axios from 'axios';
import { MapCircleProps } from 'react-native-maps';
import { Coordinates, ResponseDetailsAirport, ResponseItemsAirports } from './type';

const BASE_URL = 'https://aerodatabox.p.rapidapi.com/';
const X_REPAID_API_KEY = '2bb16f0062msh25be2f08b8ac2eap15e7f2jsn2bb2739b0907';

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
