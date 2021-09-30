import React, { FC } from 'react';
import { View } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useAppDispatch } from '@redux/hooks';
import { signIn } from '@redux/action/auth';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

export const Auth: FC = () => {
  const Styles = useThemeAwareObject(createStyles);
  const dispatch = useAppDispatch();

  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const data = await GoogleSignin.getCurrentUser();
      if (data != null) {
        const dataUser = {
          firstName: data.user.givenName,
          lastName: data.user.familyName,
          email: data.user.email,
          photo: data.user.photo,
          idToken: data.idToken,
        };
        dispatch(signIn(dataUser));
      }
      auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.dir(error);
    }
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
