import { TabNavigatorParamList } from './RootStackPrams';
import { RouteProp } from '@react-navigation/native';

export enum HomeStackScreens {
  Home = 'Home',
  Details = 'Details',
  Airports = 'Airports',
  Video = 'Video',
}

export enum SettingsStackScreens {
  Settings = 'Settings',
}
export enum FavoriteStackScreens {
  Favorite = 'Favorite',
}

export enum VideoStackScreens {
  Video = 'Video',
}

export enum TabNavigationScreen {
  HomeTab = 'HomeTab',
  SettingsTab = 'SettingsTab',
  FavoriteTab = 'FavoriteTab',
  VideoTab = 'VideoTab',
}

export type TabBarIconProps = {
  focused: boolean;
  route: RouteProp<TabNavigatorParamList, keyof TabNavigatorParamList>;
};
export type FavoriteStackParamList = {
  Favorite: undefined;
};

export type VideoStackParamList = {
  Video: undefined;
};
