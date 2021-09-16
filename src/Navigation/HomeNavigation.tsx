import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '@screen/DetailsScreen';
import { AirportsScreen } from '@screen/AirportsScreen';
import { createStyles } from './style';
import { HomeScreen } from '@screen/HomeScreen';
import { HomeStackScreens } from './types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTheme } from '@theme/Theme.context';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator<RootStackParamList>();
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeNavigation: FC<HomeScreenNavigationProp> = () => {
  const Styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeStackScreens.Home}
        component={HomeScreen}
        options={{
          title: t('title:HomeScreen'),
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={HomeStackScreens.Details}
        component={DetailsScreen}
        options={{
          title: t('title:DetailsScreen'),
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={HomeStackScreens.Airports}
        component={AirportsScreen}
        options={{
          title: t('title:AirportsScreen'),
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
