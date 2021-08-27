import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStackPrams';
import { HomeStackScreens } from '../../Navigation/types';
import { Region } from 'react-native-maps';

export type AirportsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, HomeStackScreens.Details>;
  route: RouteProp<RootStackParamList, HomeStackScreens.Details>;
  radius: number;
  coordinates: { latitude: number; longitude: number };
};
