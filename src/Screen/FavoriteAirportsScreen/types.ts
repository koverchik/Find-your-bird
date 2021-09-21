import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootStackPrams';
import { HomeStackScreens } from '@navigation/types';
import { Coordinates } from '@redux/api/type';

export type FavoriteAirportsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, HomeStackScreens.Airports>;
  route: RouteProp<RootStackParamList, HomeStackScreens.Airports>;
  radius: number;
  coordinates: Coordinates;
};
