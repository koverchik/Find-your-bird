import React, { FC } from 'react';
import { RootNavigation } from '@navigation/RootNavigation';
import { DEFAULT_LIGHT_THEME } from '@theme/DefaultLight.theme';
import { ThemeProvider } from '@theme/Theme.context';
import { getAuth } from '@redux/selectors';
import { Auth } from '../Auth';
import { useAppSelector } from '@redux/hooks';

export const WrapperRootNavigation: FC = () => {
  const { loggedIn: loggedIn } = useAppSelector(getAuth);

  return loggedIn ? (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <RootNavigation />
    </ThemeProvider>
  ) : (
    <Auth />
  );
};
