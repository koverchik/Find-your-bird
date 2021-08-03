import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SettingsNavigation from './SettingsNavigation';
import HomeStack from './HomeStack';
import { NameScreen } from './types';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name={NameScreen.Home} component={HomeStack} />
                <Tab.Screen
                    name={NameScreen.Settings}
                    component={SettingsNavigation}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainScreen;
