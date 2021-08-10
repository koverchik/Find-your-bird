import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../Screen/DetailsScreen';
import { createStyles } from './style';
import { HomeScreen } from '../Screen/HomeScreen';
import { HomeStackScreens } from './types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { useThemeAwareObject } from '../Theme/ThemeAwareObject.hook';
import { useTheme } from '../Theme/Theme.context';

const Stack = createStackNavigator<RootStackParamList>();
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeNavigation: FC<HomeScreenNavigationProp> = () => {
  const Styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeStackScreens.Home}
        component={HomeScreen}
        options={{
          title: 'Home screen',
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name={HomeStackScreens.Details}
        component={DetailsScreen}
        options={{
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};
