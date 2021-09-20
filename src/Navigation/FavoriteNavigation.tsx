import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteStackScreens } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { useTheme } from '@theme/Theme.context';
import { useTranslation } from 'react-i18next';
import { FavoriteAirportsScreen } from '@screen/FavoriteAirportsScreen';

type FavoriteStackParamList = {
  Favorite: undefined;
};
const Stack = createStackNavigator<FavoriteStackParamList>();

export const SettingsNavigation: FC = () => {
  const { theme } = useTheme();
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FavoriteStackScreens.Favorite}
        component={FavoriteAirportsScreen}
        options={{
          title: t('title:FavoriteAirportsScreen'),
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
