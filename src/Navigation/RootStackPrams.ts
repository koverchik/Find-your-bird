import { Region } from 'react-native-maps';
import { Coordinates } from '../Redux/api/type';

export type RootStackParamList = {
  Home: undefined;
  Airports: { radius: number; coordinates: Coordinates };
  Details: { radius: number; coordinates: Coordinates };
};

export type TabNavigatorParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
};
