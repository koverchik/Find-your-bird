import React, { FC, useState } from 'react';
import { View, Text, Switch, Image, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { SettingsScreenProps } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { DEFAULT_LIGHT_THEME_ID } from '../../Theme/DefaultLight.theme';
import { useTheme } from '../../Theme/Theme.context';
import { useTranslation } from 'react-i18next';
import { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { signOut } from '../../Redux/action';
import { useAppSelector } from '../../Redux/hooks';
import { getAuth } from '../../Redux/selectors/getAuth';
import { Avatar } from '../../Components/Avatar/index';

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

  const { firstName, lastName, email } = useAppSelector(getAuth);

  const thumbColor = isDarkEnabled ? theme.color.bright : theme.color.primary;

  const dispatch: AppDispatch = useDispatch();

  const onPressGoOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={Styles.container}>
      <View>
        <View style={Styles.wrapperProfile}>
          <Avatar />
          <View style={Styles.wrappersUserData}>
            <Text style={Styles.settingsText}>{`${t('Inputs:FirstName')}: ${firstName}`}</Text>
            <Text style={Styles.settingsText}>{`${t('Inputs:LastName')}: ${lastName}`}</Text>
            <Text style={Styles.settingsText}>{`${t('Inputs:Email')}: ${email}`}</Text>
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
      </View>
      <TouchableOpacity style={Styles.button} onPress={onPressGoOut}>
        <Text style={Styles.settingsText}>{t('components:buttonLogOut')}</Text>
      </TouchableOpacity>
    </View>
  );
};
