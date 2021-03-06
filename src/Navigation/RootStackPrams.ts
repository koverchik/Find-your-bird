import { Coordinates } from '@redux/api/type';

export type RootStackParamList = {
  Home: undefined;
  Airports: { radius: number; coordinates: Coordinates };
  Details: { iata: string };
};

export type TabNavigatorParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
  FavoriteTab: undefined;
};
