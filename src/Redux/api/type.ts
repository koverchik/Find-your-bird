import { GeoCoordinates } from 'react-native-geolocation-service';

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
  data: ResponseCities[];
};
