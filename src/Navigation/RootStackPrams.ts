import { Coordinates } from '@redux/api/type';

export type RootStackParamList = {
  Home: undefined;
  Airports: { radius: number; coordinates: Coordinates };
  Details: { iata: string };
  Video: undefined;
};

export type TabNavigatorParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
  FavoriteTab: undefined;
  VideoTab: undefined;
};
