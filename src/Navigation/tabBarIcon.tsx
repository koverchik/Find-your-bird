import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TabNavigationScreen, TabBarIconProps } from './types';
import React, { FC } from 'react';
import { useTheme } from '@theme/Theme.context';

export const TabBarIcon: FC<TabBarIconProps> = (props) => {
  const { theme } = useTheme();
  const { route, focused } = props;

  let nameIcon;

  switch (route.name) {
    case TabNavigationScreen.HomeTab:
      nameIcon = faHome;
      break;
    case TabNavigationScreen.SettingsTab:
      nameIcon = faSlidersH;
      break;
    default:
      nameIcon = faStar;
      break;
  }

  return (
    <FontAwesomeIcon
      icon={nameIcon}
      color={focused ? theme.color.onPrimary : theme.color.primary}
    />
  );
};
