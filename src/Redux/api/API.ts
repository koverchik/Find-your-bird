import axios, { AxiosResponse } from 'axios';
import { MapCircleProps } from 'react-native-maps';
import { Coordinates, ResponseAirports, ResponseItemsAirports } from './type';

const BASE_URL = 'https://aerodatabox.p.rapidapi.com/';
const X_REPAID_API_KEY = 'e0fbd77dc0msh70b7cc9d74bae53p11d724jsndf01ec533b62';

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
