import React, { FC, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { SignInPayloadType } from '@redux/action/auth/types';
import { regex } from '../../Constants/regex';
import { useAppDispatch } from '@redux/hooks';
import { signIn } from '@redux/action/auth';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Button } from 'react-native';

export const Auth: FC = () => {
  const Styles = useThemeAwareObject(createStyles);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '392035646425-gltf5eidvjf01eu1g94mlgqp5j26s7hu.apps.googleusercontent.com',
    });
  });

  const dispatch = useAppDispatch();

  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const data = await GoogleSignin.getCurrentUser();

      if (data != null) {
        const dataUser = {
          firstName: data.user.givenName,
          lastName: data.user.familyName,
          email: data.user.email,
          photo: data.user.photo,
        };
        dispatch(signIn(dataUser));
      }
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      Alert.alert('', JSON.stringify(e));
    }
  };

  return (
    <View style={Styles.container}>
      <GoogleSigninButton
        style={Styles.buttonGoogle}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Light}
        onPress={onGoogleButtonPress}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
};
