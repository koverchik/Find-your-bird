import axios from 'axios';
import { MapCircleProps } from 'react-native-maps';
import { Coordinates, ResponseDetailsAirport, ResponseItemsAirports } from './type';
import Config from 'react-native-config';

const BASE_URL = 'https://aerodatabox.p.rapidapi.com/';

export const apiCreate = (baseURL: string = BASE_URL) => {

  const instance = axios.create({
    baseURL,
    headers: {
      'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
      'x-rapidapi-key': Config.API_KEY,
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
