import { GeoCoordinates } from 'react-native-geolocation-service';

export type Coordinates = Pick<GeoCoordinates, 'latitude' | 'longitude'>;
