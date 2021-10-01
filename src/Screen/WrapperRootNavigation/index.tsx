import React, { FC, useEffect } from 'react';
import { RootNavigation } from '@navigation/RootNavigation';
import { DEFAULT_LIGHT_THEME } from '@theme/DefaultLight.theme';
import { ThemeProvider } from '@theme/Theme.context';
import { getAuth } from '@redux/selectors';
import { Auth } from '../Auth';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { NamesErrors } from '@root/Redux/api/type';
import { signIn, signOut } from '@root/Redux/action/auth';

export const WrapperRootNavigation: FC = () => {
  const { loggedIn: loggedIn, idToken: idToken } = useAppSelector(getAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '392035646425-gltf5eidvjf01eu1g94mlgqp5j26s7hu.apps.googleusercontent.com',
    });

    dispatch(signIn());
  }, []);

  return loggedIn ? (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <RootNavigation />
    </ThemeProvider>
  ) : (
    <Auth />
  );
};
