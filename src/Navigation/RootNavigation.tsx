import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsNavigation } from './SettingsNavigation';
import { HomeNavigation } from './HomeNavigation';
import { TabNavigationScreen } from './types';
import { TabNavigatorParamList } from './RootStackPrams';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useThemeAwareObject } from '../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { useTheme } from '../Theme/Theme.context';

const Tab = createMaterialBottomTabNavigator<TabNavigatorParamList>();

export const RootNavigation = () => {
    const { theme } = useTheme();
    const Styles = useThemeAwareObject(createStyles);

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={TabNavigationScreen.HomeTab}
                activeColor={theme.color.onPrimary}
                inactiveColor={theme.color.primary}
                barStyle={{ backgroundColor: Styles.container.backgroundColor }}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Home'
                    }}
                    name={TabNavigationScreen.HomeTab}
                    component={HomeNavigation}
                />
                <Tab.Screen
                    name={TabNavigationScreen.SettingsTab}
                    component={SettingsNavigation}
                    options={{
                        tabBarLabel: 'Settings'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
