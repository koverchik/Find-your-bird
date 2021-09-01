import { GeoCoordinates } from 'react-native-geolocation-service';
import { CitiesListDataType } from '../reducer/cities';

export type Coordinates = Pick<GeoCoordinates, 'latitude' | 'longitude'>;

export type ResponseCities = {
  countryCode: string;
  iata: string;
  icao: string;
  location: { latitude: number; longitude: number };
  municipalityName: string;
  name: string;
};

export type ResponseItemsCities = {
  data: CitiesListDataType[];
};
