import React, { FC, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { createStyles } from './style';
import { AirportsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { airportsList } from '../../Redux/action/airports';
import { getAirports } from '../../Redux/selectors';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(airportsList(props.route.params));
  }, []);
  const { airportsListData, pending } = useAppSelector(getAirports);
  console.log(airportsListData);

  return pending ? (
    <ActivityIndicator
      size="large"
      color={Styles.wrapper.backgroundColor}
      style={Styles.activityIndicator}
    />
  ) : (
    <View style={Styles.container}>
      <Text> </Text>
      {airportsListData.map((data, i) => {
        return (
          <View style={Styles.wrapper}>
            <Text key={'airports' + i} style={Styles.item}>
              {`${data.countryCode}  ${data.municipalityName}  ${data.iata} ${data.icao} ${data.shortName}`}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
