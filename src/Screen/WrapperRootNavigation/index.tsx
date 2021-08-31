import React, { FC } from 'react';
import { RootNavigation } from '../../Navigation/RootNavigation';
import { DEFAULT_LIGHT_THEME } from '../../Theme/DefaultLight.theme';
import { ThemeProvider } from '../../Theme/Theme.context';
import { getAuth } from '../../Redux/selectors/getAuth';
import { Auth } from '../Auth';
import { useAppSelector } from '../../Redux/hooks';

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
