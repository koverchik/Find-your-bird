import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStackPrams';
import { HomeStackScreens } from '../../Navigation/types';
import { Coordinates } from '../../Redux/api/type';

export type AirportsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, HomeStackScreens.Airports>;
  route: RouteProp<RootStackParamList, HomeStackScreens.Airports>;
  radius: number;
  coordinates: Coordinates;
};
