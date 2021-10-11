import { GeoCoordinates } from 'react-native-geolocation-service';

export type Coordinates = Pick<GeoCoordinates, 'latitude' | 'longitude'>;

export enum NamesErrors {
  TokenInvalid = 'auth/invalid-credential',
}
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

export type ResponseDetailsAirport = {
  icao: string;
  iata: string;
  shortName: string;
  fullName: string;
  municipalityName: string;
  location: {
    lat: number;
    lon: number;
  };
  country: {
    code: string;
    name: string;
  };
  continent: {
    code: string;
    name: string;
  };
  timeZone: string;
  urls: {
    webSite: string;
    wikipedia: string;
    twitter: string;
    googleMaps: string;
    flightRadar: string;
  };
};

export type JWT_Token = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
};