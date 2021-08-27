import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/RootStackPrams';
import { HomeStackScreens } from '../../Navigation/types';

export type HomeScreenProps = {
  navigation: StackNavigationPropNavigation;
  route: RouteProp<RootStackParamList, HomeStackScreens.Home>;
};

export type StackNavigationPropNavigation = StackNavigationProp<
  RootStackParamList,
  HomeStackScreens.Home
>;
