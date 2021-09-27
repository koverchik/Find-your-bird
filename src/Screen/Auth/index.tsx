import React, { FC, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { SignInPayloadType } from '@redux/action/auth/types';
import { regex } from '../../Constants/regex';
import { useAppDispatch } from '@redux/hooks';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const Auth: FC = () => {
  const Styles = useThemeAwareObject(createStyles);

  const { t } = useTranslation();

  const [profile, onChangeProfile] = React.useState<SignInPayloadType>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      offlineAccess: true,
      webClientId: '771438214894-2h7b0m86gum18rp4plp3t0ascv66gduj.apps.googleusercontent.com',
    });
  }, []);

  const onPressLogIn = async () => {
    // if (regex.email.test(profile.email)) {
    //   dispatch(signIn(profile));
    // } else if (profile.lastName != '' && profile.firstName != '') {
    //   Alert.alert(`${t('alert:titleError')}`, `${t('alert:messages:errorEmail')}`, [
    //     {
    //       text: `${t('components:buttonClose')}`,
    //       style: 'cancel',
    //     },
    //   ]);
    // }
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const getFieldFirstName = (field: string) => (text: string) => {
    onChangeProfile(() => {
      return { ...profile, [field]: text };
    });
  };
  const disabledButton = !(profile.lastName || profile.firstName);

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
        // disabled={disabledButton}
      >
        <Text style={Styles.text}>{t('components:buttonLogIn')}</Text>
      </TouchableOpacity>
    </View>
  );
};
