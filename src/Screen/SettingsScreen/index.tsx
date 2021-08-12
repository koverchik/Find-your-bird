import React, { FC, useState } from 'react';
import { View, Text, Switch, Image, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { SettingsScreenProps } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { DEFAULT_LIGHT_THEME_ID } from '../../Theme/DefaultLight.theme';
import { useTheme } from '../../Theme/Theme.context';
import { useTranslation } from 'react-i18next';

export const SettingsScreen: FC<SettingsScreenProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkEnabled, setIsEnabled] = useState(theme.id === DEFAULT_LIGHT_THEME_ID);
  const { t } = useTranslation();
  const toggleSwitch = () => {
    toggleTheme();
    setIsEnabled(!isDarkEnabled);
  };

  const themeName = isDarkEnabled ? t('components:kindThemeLight') : t('components:kindThemeDark');
  const Styles = useThemeAwareObject(createStyles);

  const trackColor = {
    false: theme.color.background,
    true: theme.color.onSurface,
  };
  const thumbColor = isDarkEnabled ? theme.color.bright : theme.color.primary;
  const onPressGoOut = () => {
    console.log('hello');
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.wrapperProfile}>
        <Image
          style={Styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View>
          <Text>Name</Text>
          <Text>Last name</Text>
          <Text>Emai</Text>
        </View>
      </View>
      <View style={Styles.settingsItem}>
        <Text style={Styles.settingsText}>{t('components:theme')}</Text>
        <Text style={Styles.settingsText}>{themeName}</Text>
        <Switch
          trackColor={trackColor}
          thumbColor={thumbColor}
          onValueChange={toggleSwitch}
          value={isDarkEnabled}
        />
      </View>
      <TouchableOpacity style={Styles.button} onPress={onPressGoOut}>
        <Text style={Styles.settingsText}>{t('components:buttonLogOut')}</Text>
      </TouchableOpacity>
    </View>
  );
};
