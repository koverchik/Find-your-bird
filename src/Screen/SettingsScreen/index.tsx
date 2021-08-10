import React, { FC, useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { createStyles } from './style';
import { SettingsScreenProps } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';

import { DEFAULT_LIGHT_THEME_ID } from '../../Theme/DefaultLight.theme';
import { useTheme } from '../../Theme/Theme.context';

export const SettingsScreen: FC<SettingsScreenProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkEnabled, setIsEnabled] = useState(theme.id === DEFAULT_LIGHT_THEME_ID);

  const toggleSwitch = () => {
    toggleTheme();
    setIsEnabled(!isDarkEnabled);
  };

  const themeName = isDarkEnabled ? 'Light' : 'Dark';
  const Styles = useThemeAwareObject(createStyles);

  const trackColor = {
    false: theme.color.background,
    true: theme.color.onSurface,
  };
  const thumbColor = isDarkEnabled ? theme.color.bright : theme.color.primary;

  return (
    <View style={Styles.container}>
      <View style={Styles.settingsItem}>
        <Text style={Styles.settingsText}>Theme</Text>
        <Text style={Styles.settingsText}>{themeName}</Text>
        <Switch
          trackColor={trackColor}
          thumbColor={thumbColor}
          onValueChange={toggleSwitch}
          value={isDarkEnabled}
        />
      </View>
    </View>
  );
};
