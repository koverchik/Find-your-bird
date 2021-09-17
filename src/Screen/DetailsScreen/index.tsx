import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  Linking,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import { createStyles } from './style';
import { DetailsScreenProps, ItemLinks } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { requestAirportDetails } from '@redux/action/airportDetails';
import { getDetailsAirport } from '@redux/selectors';
import { createArrayLinks } from '@screen/DetailsScreen/helper';
import { DetailsScreenView } from '@screen/DetailsScreen/DetailsScreenView';
import { InitialDetailsAirportStateTypes } from '@redux/reducer/types';

export const DetailsScreen: FC<DetailsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { pending, airportData } = useAppSelector(getDetailsAirport);

  useEffect(() => {
    dispatch(requestAirportDetails(props.route.params.iata));
  }, []);

  const renderItem: ListRenderItem<ItemLinks> = ({ item }) => {
    const { link, name } = item;
    return (
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={Styles.link}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const linksAboutAirport = () => {
    const list: ItemLinks[] = [];

    if (airportData != null) {
      createArrayLinks(airportData['urls']).forEach(function (value, key) {
        list.push({ link: value, name: key[0] });
      });
    }
    return list;
  };

  if (pending) {
    return (
      <ActivityIndicator size="large" color={Styles.link.color} style={Styles.activityIndicator} />
    );
  }

  return (
    <DetailsScreenView
      airportData={airportData}
      linksAboutAirport={linksAboutAirport()}
      renderItem={renderItem}
    />
  );
};
