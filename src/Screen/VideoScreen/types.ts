import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootStackPrams';
import { HomeStackScreens } from '@navigation/types';

export type VideoScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, HomeStackScreens.Video>;
  route: RouteProp<RootStackParamList, HomeStackScreens.Video>;
};

export type propsVideo = {
  id: string;
  title: string;
  uri: string;
  pathLocal: string | null;
};
