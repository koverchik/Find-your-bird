import React, { FC } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { createStyles } from './style';
import { HomeStackScreens, SettingsStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/store';
import { SignIn } from '../../Redux/action/index';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);

  const onPress = () => navigation.navigate(HomeStackScreens.Details, { userId: 12 });
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
      <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.text}>{t('components:buttonDitails')}</Text>
      </TouchableOpacity>
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
