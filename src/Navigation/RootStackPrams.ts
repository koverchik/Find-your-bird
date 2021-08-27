import { Region } from 'react-native-maps';

export type RootStackParamList = {
  Home: undefined;
  Details: { radius: number; coordinates: Region };
};

export type TabNavigatorParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
};
