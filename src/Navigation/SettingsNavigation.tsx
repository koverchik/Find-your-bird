import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { SettingsStackScreens } from './types';
import { useThemeAwareObject } from '../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { useTheme } from '../Theme/Theme.context';
import { useTranslation } from 'react-i18next';

type SettingsStackParamList = {
  Settings: undefined;
};
const Stack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigation: FC = () => {
  const { theme } = useTheme();
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SettingsStackScreens.Settings}
        component={SettingsScreen}
        options={{
          title: t('title:SettingsScreen'),
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
