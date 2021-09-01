import { GeoCoordinates } from 'react-native-geolocation-service';

export type Coordinates = Pick<GeoCoordinates, 'latitude' | 'longitude'>;

export type AirportsListTypes = {
  icao: string;
  iata: string;
  name: string;
  shortName: string;
  municipalityName: string;
  location: {
    lat: number;
    lon: number;
  };
  countryCode: string;
};

export type ResponseItemsAirports = {
  items: AirportsListTypes[];
};
