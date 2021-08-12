import React, { FC } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { SignIn } from '../../Redux/action/index';

export const Auth: FC = () => {
  const Styles = useThemeAwareObject(createStyles);

  const { t } = useTranslation();

  const [profile, onChangeProfile] = React.useState({ firstName: '', lastName: '', email: '' });
  const dispatch: AppDispatch = useDispatch();

  const onPressLogIn = () => {
    dispatch(SignIn(profile.firstName, profile.lastName, profile.email));
  };

  const getFildFirstName = (text: string) => {
    return { ...profile, firstName: text };
  };
  const getFildLastName = (text: string) => {
    return { ...profile, lastName: text };
  };
  const getFildEmail = (text: string) => {
    return { ...profile, email: text };
  };
  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <TextInput
          style={Styles.input}
          onChangeText={(text) => onChangeProfile(getFildFirstName(text))}
          value={profile.firstName}
          placeholder={t('Inputs:FirstName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={(text) => onChangeProfile(getFildLastName(text))}
          value={profile.lastName}
          placeholder={t('Inputs:LastName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={(text) => onChangeProfile(getFildEmail(text))}
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
