import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../Screen/DetailsScreen';
import HomeScreen from '../Screen/HomeScreen';
import { NameScreen } from './types';

const Stack = createStackNavigator();

const SettingsNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NameScreen.Home} component={HomeScreen} />
            <Stack.Screen name={NameScreen.Details} component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default SettingsNavigation;
