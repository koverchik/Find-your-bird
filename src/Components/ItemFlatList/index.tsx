import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { createStyles } from './style';
import { ItemFlatListType } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { HomeStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationPropNavigation } from '@screen/HomeScreen/type';

export const MARGIN = 16;
export const CARD_HEIGHT = 200 + MARGIN * 2;
const { height: wHeight } = Dimensions.get('window');
const height = wHeight - 64;

export const ItemFlatList: FC<ItemFlatListType> = ({
  title,
  subtitle,
  countryCode,
  location,
  icao,
  iata,
  y,
  index,
}) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  const navigation = useNavigation<StackNavigationPropNavigation>();

  const onPress = () =>
    navigation.navigate(HomeStackScreens.Details, {
      iata: iata,
    });
  return (
    <Animated.View
      style={[Styles.wrapper, { opacity, transform: [{ translateY }, { scale }] }]}
      key={index}
    >
      <View style={Styles.titleAirport}>
        <Text style={Styles.textTitle}>{subtitle}</Text>
        <Text style={Styles.text}>{title}</Text>
        <Text style={Styles.text}>Country code: {countryCode}</Text>
      </View>
      <View style={Styles.wrapperCordAndCode}>
        <View>
          <Text style={Styles.text}>lat: {location.lat}</Text>
          <Text style={Styles.text}>lon: {location.lon}</Text>
        </View>
        <View>
          <Text style={Styles.text}>icao: {icao}</Text>
          <Text style={Styles.text}>iata: {iata}</Text>
        </View>
      </View>
      <View style={Styles.wrapperButton}>
        <TouchableOpacity style={Styles.button} onPress={onPress}>
          <Text style={Styles.text}>{t('components:textForDetailsScreen')}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
