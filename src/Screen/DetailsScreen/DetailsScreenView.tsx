import React, { FC, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { createStyles } from './style';
import { DetailsScreenViewProps } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { addFavoriteAirport, deleteFavoriteAirport } from '@redux/action/favoriteAirpots';
import { AirportsListTypes } from '@redux/api/type';
import { getFavoriteAirport } from '@redux/selectors';
import { Star } from '@components/Star';

export const DetailsScreenView: FC<DetailsScreenViewProps> = ({
  airportData,
  linksAboutAirport,
  renderItem,
}) => {
  const isActive = () =>
    favoriteAirports.find((item) => {
      if (airportData) {
        return item.icao == airportData['icao'];
      }
    });

  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { favoriteAirports } = useAppSelector(getFavoriteAirport);
  const [isFavoriteAirport, setIsFavoriteAirport] = useState(!!isActive());

  const addFavoriteAirportOnPress = () => {
    if (airportData) {
      const airport: AirportsListTypes = {
        icao: airportData['icao'],
        iata: airportData['iata'],
        name: airportData['fullName'],
        shortName: airportData['country']['name'],
        municipalityName: airportData['municipalityName'],
        location: {
          lat: airportData['location']['lat'],
          lon: airportData['location']['lon'],
        },
        countryCode: airportData['country']['code'],
      };

      if (favoriteAirports.find((item) => item.icao == airport.icao)) {
        dispatch(deleteFavoriteAirport(airport));
        setIsFavoriteAirport(false);
      } else {
        dispatch(addFavoriteAirport(airport));
        setIsFavoriteAirport(true);
      }
    }
  };

  return (
    <View style={Styles.container}>
      <Star
        addFavoriteAirportOnPress={addFavoriteAirportOnPress}
        isFavoriteAirport={isFavoriteAirport}
      />
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
        <FlatList
          data={linksAboutAirport}
          extraData={airportData}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};
