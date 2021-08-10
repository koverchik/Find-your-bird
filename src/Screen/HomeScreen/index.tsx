import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { HomeStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);
  const onPress = () =>
    navigation.navigate(HomeStackScreens.Details, { userId: 12 });

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.text}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};
