import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { SettingsStackScreens } from './types';

const Stack = createStackNavigator();

export const SettingsNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SettingsStackScreens.Settings}
                component={SettingsScreen}
            />
        </Stack.Navigator>
    );
};
