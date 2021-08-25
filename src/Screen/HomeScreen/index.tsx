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
import MapView, { Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { IconMarker } from '../../Components/Marker/index';
import { Slider as SliderCustom } from '../../Components/Slider/index';

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

  return (
    <View style={Styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={Styles.map}
        showsUserLocation={true}
        showsCompass={true}
        showsScale={true}
        zoomTapEnabled={true}
        initialRegion={coordinates}
        zoomControlEnabled={true}
        onRegionChangeComplete={(e) => setCoordinates(e)}
        onRegionChange={(e) => setCoordinates(e)}
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
