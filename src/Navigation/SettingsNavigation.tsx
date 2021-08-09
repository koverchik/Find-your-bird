import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { SettingsStackScreens } from './types';
import { useThemeAwareObject } from '../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';

type SettingsStackParamList = {
    Settings: undefined;
};
const Stack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigation = () => {
    const Styles = useThemeAwareObject(createStyles);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SettingsStackScreens.Settings}
                component={SettingsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Styles.container.backgroundColor
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    );
};
