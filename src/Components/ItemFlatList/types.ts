import { Animated } from 'react-native';

export type ItemFlatListType = {
  title: string;
  subtitle: string;
  countryCode: string;
  location: {
    lat: number;
    lon: number;
  };
  icao: string;
  iata: string;
  y: Animated.Value;
  index: number;
};
