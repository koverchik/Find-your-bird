import { HomeStackScreens } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { IconMarker } from '@root/Components/Marker';
import { SliderCustom } from '@root/Components/Slider';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { requestLocationPermission } from './helper';
import { createStyles } from './style';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);

  const onPress = () =>
    navigation.navigate(HomeStackScreens.Airports, {
      coordinates: {
        latitude: Math.round(coordinates.latitude),
        longitude: Math.round(coordinates.longitude),
      },
      radius: currentValueRadius,
    });

  const { t } = useTranslation();
  const [currentValueRadius, setCurrentValueRadius] = useState(0);
  const [coordinates, setCoordinates] = useState({
    latitude: 153.5078788,
    longitude: 127.0877321,
    latitudeDelta: 2,
    longitudeDelta: 0.009,
  });

  useEffect(() => {
    requestLocationPermission();
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
        onRegionChangeComplete={(e) => {
          setCoordinates(e);
        }}
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
