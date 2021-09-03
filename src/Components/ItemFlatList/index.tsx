import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { ItemFlatListType } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';

export const ItemFlatList: FC<ItemFlatListType> = ({
  title,
  subtitle,
  countryCode,
  location,
  icao,
  iata,
}) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  return (
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
};
