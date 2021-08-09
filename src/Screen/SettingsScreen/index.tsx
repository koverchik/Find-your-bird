import React, { FC, useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { createStyles } from './style';
import { SettingsScreenProps } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTheme } from '../../Theme/Theme.context';
import { DEFAULT_LIGHT_THEME_ID } from '../../Theme/DefaultLight.theme';

export const SettingsScreen = React.memo<SettingsScreenProps>(() => {
    const { theme, toggleTheme } = useTheme();
    const [isDarkEnabled, setIsEnabled] = useState(
        theme.id === DEFAULT_LIGHT_THEME_ID
    );
    const toggleSwitch = () => {
        toggleTheme();
        setIsEnabled(!isDarkEnabled);
    };
    const themeName = isDarkEnabled ? 'Light' : 'Dark';
    const Styles = useThemeAwareObject(createStyles);

    return (
        <View style={Styles.container}>
            <Text style={Styles.settingsTextHeder}>Settings</Text>
            <View style={Styles.settingsItem}>
                <Text style={Styles.settingsText}>Theme</Text>

                <Text style={Styles.settingsText}>{themeName}</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isDarkEnabled}
                />
            </View>
        </View>
    );
});
