import axios, { AxiosResponse } from 'axios';
import { MapCircleProps } from 'react-native-maps';
import { Coordinates, ResponseCities, ResponseItemsCities } from './type';

const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/';
const X_REPAID_API_KEY = '7a84181a13msh48539be893df8e4p1cee52jsn21e1324632dc';

export const apiCreate = (baseURL: string = BASE_URL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': X_REPAID_API_KEY,
    },
  });

  const getCities = (radius: MapCircleProps['radius'], coordinates: Coordinates) => {
    return instance.get<ResponseItemsCities>(
      `v1/geo/locations/${coordinates.latitude}${coordinates.longitude}/nearbyDivisions`,
      { params: { radius: radius } },
    );
  };

  return { getCities };
};
