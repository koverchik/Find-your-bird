import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootStackPrams';
import { HomeStackScreens } from '@navigation/types';

export type DetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, HomeStackScreens.Details>;
  route: RouteProp<RootStackParamList, HomeStackScreens.Details>;
  iata: string;
};
