import React, { FC, useState } from 'react';
import { SettingsScreenProps } from './type';
import { DEFAULT_LIGHT_THEME_ID } from '../../Theme/DefaultLight.theme';
import { useTheme } from '../../Theme/Theme.context';
import { useTranslation } from 'react-i18next';
import { signOut } from '@redux/action/auth';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { getAuth } from '@redux/selectors';
import { SettingsScreenView } from './settingsScreenView';

export const SettingsScreen: FC<SettingsScreenProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkEnabled, setIsEnabled] = useState(theme.id === DEFAULT_LIGHT_THEME_ID);

  const { t } = useTranslation();
  const toggleSwitch = () => {
    toggleTheme();
    setIsEnabled(!isDarkEnabled);
  };

  const themeName = isDarkEnabled ? t('components:kindThemeLight') : t('components:kindThemeDark');

  const trackColor = {
    false: theme.color.background,
    true: theme.color.onSurface,
  };

  const { firstName, lastName, email } = useAppSelector(getAuth);

  const thumbColor = isDarkEnabled ? theme.color.bright : theme.color.primary;
  const colorAvatarSVG = isDarkEnabled ? theme.color.onPrimary : theme.color.onSurface;

  const dispatch = useAppDispatch();

  const onPressGoOut = () => {
    dispatch(signOut());
  };

  return (
    <SettingsScreenView
      firstName={`${t('Inputs:FirstName')}: ${firstName}`}
      lastName={`${t('Inputs:LastName')}: ${lastName}`}
      email={`${t('Inputs:Email')}: ${email}`}
      theme={t('components:theme')}
      themeName={themeName}
      trackColor={trackColor}
      colorAvatarSVG={colorAvatarSVG}
      thumbColor={thumbColor}
      onValueChange={toggleSwitch}
      isDarkEnabled={isDarkEnabled}
      onPress={onPressGoOut}
      buttonLogOut={t('components:buttonLogOut')}
    />
  );
};
