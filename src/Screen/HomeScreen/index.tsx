import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  Slider,
} from 'react-native';
import { createStyles } from './style';
import { HomeStackScreens, SettingsStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import MapView, { Circle, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { IconMarker } from '../../Components/Marker/index';
import { Slider as SliderCustom } from '../../Components/Slider/index';
import Geolocation from 'react-native-geolocation-service';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);

  const onPress = () => navigation.navigate(HomeStackScreens.Details, { userId: 12 });
  const { t } = useTranslation();
  const screen = Dimensions.get('window');

  const [coordinates, setCoordinates] = useState({
    latitude: 53.5078788,
    longitude: 27.0877321,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(position);
        setCoordinates((prev) => {
          return {
            ...prev,
            latitude,
            longitude,
          };
        });
      },
      (error) => {
        setCoordinates((prev) => {
          return {
            ...prev,
            latitude: 43.772507,
            longitude: 50.356763,
          };
        });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);

  return (
    <View style={Styles.container}>
      <MapView
        region={coordinates}
        provider={PROVIDER_GOOGLE}
        style={Styles.map}
        showsCompass={true}
        showsScale={true}
        zoomTapEnabled={true}
        zoomControlEnabled={true}
      ></MapView>
      <SliderCustom />
      <IconMarker />

      {/* <View
        style={[
          Styles.absoluteLeft,
          {
            transform: [{ rotate: '0deg' }],
          },
        ]}
      />
      <View
        style={[
          Styles.absoluteRight,
          {
            transform: [{ rotate: '90deg' }],
          },
        ]}
      /> */}
      {/* <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.text}>{t('components:buttonDitails')}</Text>
      </TouchableOpacity> */}
    </View>
  );
};
