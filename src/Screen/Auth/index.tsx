import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { signIn } from '@redux/action/auth';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export const Auth: FC = () => {
  const Styles = useThemeAwareObject(createStyles);
  const dispatch = useAppDispatch();

  const onGoogleButtonPress = async () => {
    dispatch(signIn());
  };

  return (
    <View style={Styles.container}>
      <GoogleSigninButton
        style={Styles.buttonGoogle}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Light}
        onPress={onGoogleButtonPress}
      />
    </View>
  );
};
