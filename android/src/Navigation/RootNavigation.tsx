import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsNavigation } from './SettingsNavigation';
import { HomeNavigation } from './HomeNavigation';
import { TabNavigationScreen } from './types';
import { TabNavigatorParamList } from './RootStackPrams';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={TabNavigationScreen.HomeTab}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name={TabNavigationScreen.HomeTab}
                    component={HomeNavigation}
                />
                <Tab.Screen
                    name={TabNavigationScreen.SettingsTab}
                    component={SettingsNavigation}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
