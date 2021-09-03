import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStackPrams';
import { HomeStackScreens } from '../../Navigation/types';
import { Region } from 'react-native-maps';
import { Coordinates } from '../../Redux/api/type';

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
};
