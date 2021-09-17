import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootStackPrams';
import { HomeStackScreens } from '@navigation/types';
import { InitialDetailsAirportStateTypes } from '@redux/reducer/types';
import { ListRenderItem } from 'react-native';

export type DetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, HomeStackScreens.Details>;
  route: RouteProp<RootStackParamList, HomeStackScreens.Details>;
  iata: string;
};

export type DetailsScreenViewProps = {
  airportData: InitialDetailsAirportStateTypes['airportData'];
  linksAboutAirport: () => ItemLinks[];
  renderItem: ListRenderItem<ItemLinks>;
};

export type ItemLinks = { link: string; name: string };
