import React, { FC } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { signIn } from '../../Redux/action/index';
import { SignInPaylod } from '../../Redux/action/types';
import { regex } from '../../Constants/regex';

export const Auth: FC = () => {
  const Styles = useThemeAwareObject(createStyles);

  const { t } = useTranslation();

  const [profile, onChangeProfile] = React.useState<SignInPaylod>({
    firstName: '',
    lastName: '',
    email: '',
  });
  const dispatch: AppDispatch = useDispatch();

  const onPressLogIn = () => {
    if (regex.email.test(profile.email)) {
      dispatch(signIn(profile));
    } else {
      Alert.alert(`${t('allert:titleError')}`, `${t('allert:messages:errorEmail')}`, [
        {
          text: `${t('components:buttonClose')}`,
          style: 'cancel',
        },
      ]);
    }
  };

  const getFiedFirstName = (field: string) => (text: string) => {
    onChangeProfile(() => {
      return { ...profile, [field]: text };
    });
  };

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <TextInput
          style={Styles.input}
          onChangeText={getFiedFirstName('firstName')}
          value={profile.firstName}
          placeholder={t('Inputs:FirstName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={getFiedFirstName('lastName')}
          value={profile.lastName}
          placeholder={t('Inputs:LastName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={getFiedFirstName('email')}
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
        disabled={profile.lastName != '' && profile.firstName != '' ? false : true}
      >
        <Text style={Styles.text}>{t('components:buttonLogIn')}</Text>
      </TouchableOpacity>
    </View>
  );
};
