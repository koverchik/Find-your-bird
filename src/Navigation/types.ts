import { TabNavigatorParamList } from './RootStackPrams';
import { RouteProp } from '@react-navigation/native';

export enum HomeStackScreens {
  Home = 'Home',
  Details = 'Details',
  Cities = 'Cities',
}

export enum SettingsStackScreens {
  Settings = 'Settings',
}

export enum TabNavigationScreen {
  HomeTab = 'HomeTab',
  SettingsTab = 'SettingsTab',
}

export type TabBarIconProps = {
  focused: boolean;
  route: RouteProp<TabNavigatorParamList, keyof TabNavigatorParamList>;
};
