import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { HomeStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoia292ZXJjaGlrIiwiYSI6ImNrc2tkdGxlaDFhcWgyb21idWhpbHF4a3EifQ.gTt3ny0ZCa1kWJtlYcE7mg',
);

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigation = useNavigation<StackNavigationPropNavigation>();
  const Styles = useThemeAwareObject(createStyles);

  const onPress = () => navigation.navigate(HomeStackScreens.Details, { userId: 12 });
  const { t } = useTranslation();

  const [coordinates, setCoordinates] = useState([27.561831, 53.902284]);
  const changeCoordigates = (e: GeoJSON.Feature<GeoJSON.Point>) =>
    setCoordinates(e.geometry.coordinates);
  return (
    <View style={Styles.container}>
      <View style={Styles.containerMap}>
        <MapboxGL.MapView
          style={Styles.map}
          localizeLabels={true}
          logoEnabled={false}
          onRegionDidChange={changeCoordigates}
          onRegionIsChanging={changeCoordigates}
          onRegionWillChange={changeCoordigates}
          regionDidChangeDebounceTime={5000}
          regionWillChangeDebounceTime={100}
        >
          <MapboxGL.PointAnnotation id="1" coordinate={coordinates} anchor={{ x: 0.5, y: 1 }}>
            <View style={Styles.dot} />
          </MapboxGL.PointAnnotation>
          {/* <MapboxGL.ShapeSource id="symbolLocationSource" hitbox={{ width: 20, height: 20 }} /> */}
        </MapboxGL.MapView>
      </View>
      {/* <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.text}>{t('components:buttonDitails')}</Text>
      </TouchableOpacity> */}
    </View>
  );
};
