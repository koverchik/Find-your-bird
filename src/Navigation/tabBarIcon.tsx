import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TabNavigationScreen, TabBarIconProps } from './types';
import React, { FC } from 'react';
import { useTheme } from '../Theme/Theme.context';

export const TabBarIcon: FC<TabBarIconProps> = (props) => {
  const { theme } = useTheme();
  const { route, focused } = props;

  let nameIcon;
  if (route.name === TabNavigationScreen.HomeTab) {
    nameIcon = faHome;
  } else {
    nameIcon = faSlidersH;
  }

  return (
    <FontAwesomeIcon
      icon={nameIcon}
      color={focused ? theme.color.onPrimary : theme.color.primary}
    />
  );
};
