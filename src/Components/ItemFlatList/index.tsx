import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { createStyles } from './style';
import { ItemFlatListType } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { HomeStackScreens } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationPropNavigation } from '@screen/HomeScreen/type';
import { AirportsListTypes } from '@redux/api/type';
import { addFavoriteAirport, deleteFavoriteAirport } from '@redux/action/favoriteAirpots';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { getFavoriteAirport } from '@redux/selectors';
import { Star } from '@components/Star';

export const MARGIN = 16;
export const CARD_HEIGHT = 200 + MARGIN * 2;
const { height: wHeight } = Dimensions.get('window');
const HEIGHT = wHeight;

export const ItemFlatList: FC<ItemFlatListType> = ({
  title,
  subtitle,
  countryCode,
  location,
  icao,
  shortName,
  iata,
  y,
  index,
}) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = HEIGHT - CARD_HEIGHT;
  const isAppearing = HEIGHT;
  const isActive = () =>
    favoriteAirports.find((item) => {
      return item.icao == icao;
    });
  const dispatch = useAppDispatch();
  const { favoriteAirports } = useAppSelector(getFavoriteAirport);
  const [isFavoriteAirport, setIsFavoriteAirport] = useState(!!isActive());

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

  const addFavoriteAirportOnPress = () => {
    const airport: AirportsListTypes = {
      icao,
      iata,
      name: title,
      shortName,
      municipalityName: subtitle,
      location: {
        lat: location.lat,
        lon: location.lon,
      },
      countryCode,
    };
    if (favoriteAirports.find((item) => item.icao == airport.icao)) {
      dispatch(deleteFavoriteAirport(airport));
      setIsFavoriteAirport(false);
    } else {
      dispatch(addFavoriteAirport(airport));
      setIsFavoriteAirport(true);
    }
  };

  return (
    <Animated.View
      style={[Styles.wrapper, { opacity, transform: [{ translateY }, { scale }] }]}
      key={index}
    >
      <View style={Styles.wrapperTitleAirport}>
        <Star
          addFavoriteAirportOnPress={addFavoriteAirportOnPress}
          isFavoriteAirport={isFavoriteAirport}
        />
        <View style={Styles.titleAirport}>
          <Text style={Styles.textTitle}>{subtitle}</Text>
          <Text style={Styles.text}>{title}</Text>
          <Text style={Styles.text}>Country code: {countryCode}</Text>
        </View>
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
