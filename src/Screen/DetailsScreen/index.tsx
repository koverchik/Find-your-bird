import React, { FC, useEffect, useState } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { createStyles } from './style';
import { DetailsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { api } from '../../Redux/store';
import { log } from 'react-native-reanimated';
import { ResponseDetailsAirport } from '../../Redux/api/type';

export const DetailsScreen: FC<DetailsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const [detailsAirport, setDetailsAirport] = useState<ResponseDetailsAirport>();

  useEffect(() => {
    api.getDetailsAirport(props.route.params.iata).then((request) => {
      return setDetailsAirport(request.data);
    });
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>{detailsAirport?.shortName}</Text>
      <View style={Styles.titleAirport}>
        <Text style={Styles.text}>
          {t('detailsScreen:fullName')}: {detailsAirport?.fullName}
        </Text>
        <Text style={Styles.text}>
          {t('detailsScreen:timeZone')}: {detailsAirport?.timeZone}
        </Text>
        <View style={Styles.wrapperPropsAndCode}>
          <View style={Styles.wrapperProp}>
            <Text style={Styles.item}>
              {t('detailsScreen:continent')}: {detailsAirport?.continent.name}
            </Text>
            <Text style={Styles.item}>
              {t('detailsScreen:country')}: {detailsAirport?.country.name}
            </Text>
            <Text style={Styles.item}>ICAO: {detailsAirport?.icao}</Text>
          </View>
          <View style={Styles.wrapperCode}>
            <Text style={Styles.item}>
              {t('detailsScreen:code')}: {detailsAirport?.continent.code}
            </Text>
            <Text style={Styles.item}>
              {t('detailsScreen:code')}: {detailsAirport?.country.code}
            </Text>
            <Text style={Styles.item}>IATA: {detailsAirport?.iata}</Text>
          </View>
        </View>
      </View>
      <Text style={Styles.headerLink}>{t('detailsScreen:links')}:</Text>
      <View style={Styles.wrapperLinks}>
        <Text style={Styles.link} onPress={() => Linking.openURL(detailsAirport?.urls.flightRadar)}>
          Flight radar
        </Text>
        <Text style={Styles.link} onPress={() => Linking.openURL(detailsAirport?.urls.wikipedia)}>
          Wikipedia
        </Text>
        <Text style={Styles.link} onPress={() => Linking.openURL(detailsAirport?.urls.googleMaps)}>
          Google maps
        </Text>
        <Text style={Styles.link} onPress={() => Linking.openURL(detailsAirport?.urls.webSite)}>
          Website
        </Text>
        <Text style={Styles.link} onPress={() => Linking.openURL(detailsAirport?.urls.twitter)}>
          Twitter
        </Text>
      </View>
    </View>
  );
};
