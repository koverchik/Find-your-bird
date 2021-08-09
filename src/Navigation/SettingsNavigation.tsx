import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { SettingsStackScreens } from './types';
import { color } from 'react-native-reanimated';

type SettingsStackParamList = {
    Settings: undefined;
};
const Stack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SettingsStackScreens.Settings}
                component={SettingsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#ff80ac'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    );
};
