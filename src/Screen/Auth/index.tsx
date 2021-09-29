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
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button } from 'react-native';

export const Auth: FC = () => {
  const Styles = useThemeAwareObject(createStyles);

  const { t } = useTranslation();

  const [profile, onChangeProfile] = React.useState<SignInPayloadType>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const dispatch = useAppDispatch();

  const onPressLogIn = () => {
    if (regex.email.test(profile.email)) {
      dispatch(signIn(profile));
    } else if (profile.lastName != '' && profile.firstName != '') {
      Alert.alert(`${t('alert:titleError')}`, `${t('alert:messages:errorEmail')}`, [
        {
          text: `${t('components:buttonClose')}`,
          style: 'cancel',
        },
      ]);
    }
  };

  const getFieldFirstName = (field: string) => (text: string) => {
    onChangeProfile(() => {
      return { ...profile, [field]: text };
    });
  };
  const disabledButton = !(profile.lastName || profile.firstName);
  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      Alert.alert('', JSON.stringify(e));
    }
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '392035646425-gltf5eidvjf01eu1g94mlgqp5j26s7hu.apps.googleusercontent.com',
    });
  });
  const signOut = async () => {
    await GoogleSignin.signOut();
    console.log('sign out');
  };

  const userInfo = async () => {
    const user = await GoogleSignin.getCurrentUser();
    console.log('userInfo', user);
  };
  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <TextInput
          style={Styles.input}
          onChangeText={getFieldFirstName('firstName')}
          value={profile.firstName}
          placeholder={t('Inputs:FirstName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={getFieldFirstName('lastName')}
          value={profile.lastName}
          placeholder={t('Inputs:LastName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={getFieldFirstName('email')}
          value={profile.email}
          placeholder={t('Inputs:Email')}
        />
      </SafeAreaView>
      <TouchableOpacity
        style={
          profile.lastName != '' && profile.firstName != ''
            ? Styles.buttonDisable
            : Styles.buttonActive
        }
        onPress={onPressLogIn}
        disabled={disabledButton}
      >
        <Text style={Styles.text}>{t('components:buttonLogIn')}</Text>
      </TouchableOpacity>
      <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
      <View style={{ height: 50 }} />
      <Button title="Google Sign Out" onPress={signOut} />
      <View style={{ height: 50 }} />
      <Button title="User Info" onPress={userInfo} />
    </View>
  );
};
