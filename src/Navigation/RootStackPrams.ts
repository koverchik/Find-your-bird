import { Region } from 'react-native-maps';

export type RootStackParamList = {
  Home: undefined;
  Airports: { radius: number; coordinates: { latitude: number; longitude: number } };
  Details: { radius: number; coordinates: { latitude: number; longitude: number } };
};

export type TabNavigatorParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
};
