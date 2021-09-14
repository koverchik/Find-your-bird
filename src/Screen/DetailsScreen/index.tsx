import React, { FC, useEffect } from 'react';
import { View, Text, Linking, ActivityIndicator } from 'react-native';
import { createStyles } from './style';
import { DetailsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { requestAirportDetails } from '@redux/action/airportDetails';
import { getDetailsAirport } from '@redux/selectors';

export const DetailsScreen: FC<DetailsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestAirportDetails(props.route.params.iata));
  }, []);
  const { pending, airportData } = useAppSelector(getDetailsAirport);

  if (pending) {
    return (
      <ActivityIndicator size="large" color={Styles.link.color} style={Styles.activityIndicator} />
    );
  }
  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>{airportData?.shortName}</Text>
      <View style={Styles.titleAirport}>
        <Text style={Styles.text}>
          {t('detailsScreen:fullName')}: {airportData?.fullName}
        </Text>
        <Text style={Styles.text}>
          {t('detailsScreen:timeZone')}: {airportData?.timeZone}
        </Text>
        <View style={Styles.wrapperPropsAndCode}>
          <View style={Styles.wrapperProp}>
            <Text style={Styles.text}>
              {t('detailsScreen:continent')}: {airportData?.continent.name}
            </Text>
            <Text style={Styles.text}>
              {t('detailsScreen:country')}: {airportData?.country.name}
            </Text>
            <Text style={Styles.text}>ICAO: {airportData?.icao}</Text>
          </View>
          <View style={Styles.wrapperCode}>
            <Text style={Styles.text}>
              {t('detailsScreen:code')}: {airportData?.continent.code}
            </Text>
            <Text style={Styles.text}>
              {t('detailsScreen:code')}: {airportData?.country.code}
            </Text>
            <Text style={Styles.text}>IATA: {airportData?.iata}</Text>
          </View>
        </View>
      </View>
      <Text style={Styles.headerLink}>{t('detailsScreen:links')}:</Text>
      <View style={Styles.wrapperLinks}>
        {!!airportData?.urls.flightRadar && (
          <Text style={Styles.link} onPress={() => Linking.openURL(airportData.urls.flightRadar)}>
            Flight radar
          </Text>
        )}
        {!!airportData?.urls.wikipedia && (
          <Text style={Styles.link} onPress={() => Linking.openURL(airportData.urls.wikipedia)}>
            Wikipedia
          </Text>
        )}
        {!!airportData?.urls.googleMaps && (
          <Text style={Styles.link} onPress={() => Linking.openURL(airportData.urls.googleMaps)}>
            Google maps
          </Text>
        )}
        {!!airportData?.urls.webSite && (
          <Text style={Styles.link} onPress={() => Linking.openURL(airportData.urls.webSite)}>
            Website
          </Text>
        )}
        {!!airportData?.urls.twitter && (
          <Text style={Styles.link} onPress={() => Linking.openURL(airportData.urls.twitter)}>
            Twitter
          </Text>
        )}
      </View>
    </View>
  );
};
