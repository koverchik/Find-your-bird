import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { SettingsStackScreens } from './types';
import { useThemeAwareObject } from '../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { useTheme } from '../Theme/Theme.context';
type SettingsStackParamList = {
    Settings: undefined;
};
const Stack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigation = () => {
    const { theme } = useTheme();
    const Styles = useThemeAwareObject(createStyles);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SettingsStackScreens.Settings}
                component={SettingsScreen}
                options={{
                    headerStyle: Styles.container,
                    headerTintColor: theme.color.primary,
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    );
};
