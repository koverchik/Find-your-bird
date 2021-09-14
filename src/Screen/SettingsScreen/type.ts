import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { TabNavigatorParamList } from '../../Navigation/RootStackPrams';
import { TabNavigationScreen } from '../../Navigation/types';
import { InitialStateAuthType } from '@redux/reducer/types';

export type SettingsScreenProps = {
  navigation: StackNavigationProp<TabNavigatorParamList, TabNavigationScreen.SettingsTab>;
  route: RouteProp<TabNavigatorParamList, TabNavigationScreen.SettingsTab>;
};

export type SettingsScreenViewProps = {
  buttonLogOut: string;
  email: InitialStateAuthType['email'];
  firstName: InitialStateAuthType['firstName'];
  lastName: InitialStateAuthType['lastName'];
  theme: string;
  themeName: string;
  onPress: () => void;
  onValueChange: () => void;
  thumbColor: string;
  trackColor: { false: string; true: string };
  isDarkEnabled: boolean;
  colorAvatarSVG: string;
};
