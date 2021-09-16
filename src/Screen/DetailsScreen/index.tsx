import React, {FC, useEffect, useState} from 'react';
import {View, Text, Linking, ActivityIndicator, FlatList, TouchableOpacity, ListRenderItem} from 'react-native';
import { createStyles } from './style';
import {DetailsScreenProps, itemLinks} from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { requestAirportDetails } from '@redux/action/airportDetails';
import { getDetailsAirport } from '@redux/selectors';
import { createArrayLinks } from '@screen/DetailsScreen/helper';

export const DetailsScreen: FC<DetailsScreenProps> = (props) => {

  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [linksAirports, setLinksAirports] = useState<itemLinks[]>([]);
  const { pending, airportData } = useAppSelector(getDetailsAirport);

  useEffect(() => {
    dispatch(requestAirportDetails(props.route.params.iata));
  }, []);

  useEffect(() => {
    if (airportData != null) {
      const list: itemLinks[]= [];
      createArrayLinks(airportData['urls']).forEach(function (value, key) {
        list.push({link: value, name: key[0]});
      });
      setLinksAirports(list);
    }
  }, [airportData]);

  const renderItem: ListRenderItem<itemLinks> = ({item}) => {
       return (
        <TouchableOpacity  onPress={() => Linking.openURL(item.link)}>
          <Text style={Styles.link}>{item.name}</Text>
        </TouchableOpacity>
    );
  };

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
      <FlatList
          data={linksAirports}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
      />
      </View>
    </View>
  );
};
