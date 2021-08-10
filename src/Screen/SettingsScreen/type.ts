import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { TabNavigatorParamList } from '../../Navigation/RootStackPrams';
import { TabNavigationScreen } from '../../Navigation/types';

export type SettingsScreenProps = {
  navigation: StackNavigationProp<TabNavigatorParamList, TabNavigationScreen.SettingsTab>;
  route: RouteProp<TabNavigatorParamList, TabNavigationScreen.SettingsTab>;
};
