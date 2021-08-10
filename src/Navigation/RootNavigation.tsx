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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        if (route.name === TabNavigationScreen.HomeTab) {
                            return (
                                <FontAwesomeIcon
                                    icon={faHome}
                                    color={
                                        focused == true
                                            ? theme.color.onPrimary
                                            : theme.color.primary
                                    }
                                />
                            );
                        } else {
                            return (
                                <FontAwesomeIcon
                                    icon={faSlidersH}
                                    color={
                                        focused == true
                                            ? theme.color.onPrimary
                                            : theme.color.primary
                                    }
                                />
                            );
                        }
                    }
                })}
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
