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

  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');

  const dispatch: AppDispatch = useDispatch();

  const onPressLogIn = () => {
    dispatch(SignIn(firstName, lastName, email));
  };

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <TextInput
          style={Styles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder={t('Inputs:FirstName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder={t('Inputs:LastName')}
        />
        <TextInput
          style={Styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder={t('Inputs:Email')}
        />
      </SafeAreaView>
      <TouchableOpacity style={Styles.button} onPress={onPressLogIn}>
        <Text style={Styles.text}>{t('components:buttonLogIn')}</Text>
      </TouchableOpacity>
    </View>
  );
};
