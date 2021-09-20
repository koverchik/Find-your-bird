import { TabNavigatorParamList } from './RootStackPrams';
import { RouteProp } from '@react-navigation/native';

export enum HomeStackScreens {
  Home = 'Home',
  Details = 'Details',
  Airports = 'Airports',
}

export enum SettingsStackScreens {
  Settings = 'Settings',
}
export enum FavoriteStackScreens {
  Favorite = 'Favorite',
}

export enum TabNavigationScreen {
  HomeTab = 'HomeTab',
  SettingsTab = 'SettingsTab',
  FavoriteTab = 'FavoriteTab',
}

export type TabBarIconProps = {
  focused: boolean;
  route: RouteProp<TabNavigatorParamList, keyof TabNavigatorParamList>;
};
