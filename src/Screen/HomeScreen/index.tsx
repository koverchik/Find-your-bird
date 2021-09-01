import React, { FC, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { HomeStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import MapView, { Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { IconMarker } from '../../Components/Marker/index';
import { SliderCustom } from '../../Components/Slider/index';
import Geolocation from 'react-native-geolocation-service';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);
  const [currentValueRadius, setCurrentValueRadius] = useState(0);
  const [coordinates, setCoordinates] = useState({
    latitude: 153.5078788,
    longitude: 127.0877321,
    latitudeDelta: 2,
    longitudeDelta: 0.009,
  });
  const { latitude, longitude } = coordinates;

  const onPress = () =>
    navigation.navigate(HomeStackScreens.Cities, {
      coordinates: {
        latitude: +latitude.toFixed(6),
        longitude: +longitude.toFixed(6),
      },
      radius: currentValueRadius,
    });

  const { t } = useTranslation();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates((prev) => {
          return {
            ...prev,
            latitude,
            longitude,
          };
        });
      },
      () => {
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
        showsUserLocation={true}
        maxZoomLevel={20}
        onRegionChangeComplete={setCoordinates}
      >
        <Circle
          center={coordinates}
          radius={currentValueRadius * 1000}
          fillColor={'rgba(248, 66, 130, 0.3)'}
          strokeColor={'rgba(248, 66, 130, 0.3)'}
        />
      </MapView>

      <SliderCustom
        currentValueRadius={currentValueRadius}
        fcCurrentValueRadius={setCurrentValueRadius}
      />
      <IconMarker />
      <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.text}>{t('components:search')}</Text>
      </TouchableOpacity>
    </View>
  );
};
