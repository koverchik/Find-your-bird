import React, { FC } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { SignIn } from '../../Redux/action/index';
import { AuthTypes, SignInPaylod } from '../../Redux/action/types';

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
    dispatch(
      SignIn({
        type: AuthTypes.SING_IN,
        payload: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email,
        },
      }),
    );
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
      <TouchableOpacity style={Styles.button} onPress={onPressLogIn}>
        <Text style={Styles.text}>{t('components:buttonLogIn')}</Text>
      </TouchableOpacity>
    </View>
  );
};
