import { GeoCoordinates } from 'react-native-geolocation-service';

export type Coordinates = Pick<GeoCoordinates, 'latitude' | 'longitude'>;

export type ResponseAirports = {
  countryCode: string;
  iata: string;
  icao: string;
  location: Coordinates;
  municipalityName: string;
  name: string;
};

export type ResponseItemsAirports = {
  items: ResponseAirports[];
};
