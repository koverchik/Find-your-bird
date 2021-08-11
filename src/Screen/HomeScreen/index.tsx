import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { HomeStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);
  const onPress = () => navigation.navigate(HomeStackScreens.Details, { userId: 12 });
  const { t } = useTranslation();

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.text}>{t('components:buttonDitails')}</Text>
      </TouchableOpacity>
    </View>
  );
};
