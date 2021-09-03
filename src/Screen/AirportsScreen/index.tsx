import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { createStyles } from './style';
import { AirportsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { airportsList } from '../../Redux/action/airports';
import { getAirports } from '../../Redux/selectors';
import { airportsListData } from './data';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(airportsList(props.route.params));
  // }, []);
  const { pending } = useAppSelector(getAirports);

  console.log(airportsListData);

  const renderItem = ({ item }) => (
    <Item
      title={item.name}
      subtitle={item.municipalityName}
      countryCode={item.countryCode}
      location={item.location}
      icao={item.icao}
      iata={item.iata}
    />
  );

  const Item = ({ title, subtitle, countryCode, location, icao, iata }) => (
    <View style={Styles.wrapper}>
      <View style={Styles.titleAirport}>
        <Text style={Styles.textTitle}>{title}</Text>
        <Text style={Styles.text}>{subtitle}</Text>
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
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.text}>{t('components:textForDetailsScreen')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return pending ? (
    <ActivityIndicator
      size="large"
      color={Styles.wrapper.backgroundColor}
      style={Styles.activityIndicator}
    />
  ) : (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={airportsListData}
        renderItem={renderItem}
        keyExtractor={(item) => item.icao}
      />
    </SafeAreaView>
  );
};
