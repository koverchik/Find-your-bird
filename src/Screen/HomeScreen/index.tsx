import React, { FC } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { createStyles } from './style';
import { HomeStackScreens, SettingsStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../Redux/hooks';
import { getAuth } from '../../Redux/selectors/getAuth';
import { Auth } from './auth';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);

  const { firstName, lastName, email } = useAppSelector(getAuth);

  const onPress = () => navigation.navigate(HomeStackScreens.Details, { userId: 12 });
  const { t } = useTranslation();

  return (
    <View style={Styles.container}>
      {firstName != '' && lastName != '' && email != '' ? (
        <TouchableOpacity style={Styles.button} onPress={onPress}>
          <Text style={Styles.text}>{t('components:buttonDitails')}</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </View>
  );
};
