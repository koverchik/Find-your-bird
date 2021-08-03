import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Screen/SettingsScreen';
import { NameScreen } from './types';

const Stack = createStackNavigator();

const SettingsNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NameScreen.Settings}
                component={SettingsScreen}
            />
        </Stack.Navigator>
    );
};

export default SettingsNavigation;
