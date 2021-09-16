import React, { FC } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { createStyles } from './style';
import { DetailsScreenViewProps} from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';

export const DetailsScreenView: FC<DetailsScreenViewProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>{props.airportData?.shortName}</Text>
      <View style={Styles.titleAirport}>
        <Text style={Styles.text}>
          {t('detailsScreen:fullName')}: {props.airportData?.fullName}
        </Text>
        <Text style={Styles.text}>
          {t('detailsScreen:timeZone')}: {props.airportData?.timeZone}
        </Text>
        <View style={Styles.wrapperPropsAndCode}>
          <View style={Styles.wrapperProp}>
            <Text style={Styles.text}>
              {t('detailsScreen:continent')}: {props.airportData?.continent.name}
            </Text>
            <Text style={Styles.text}>
              {t('detailsScreen:country')}: {props.airportData?.country.name}
            </Text>
            <Text style={Styles.text}>ICAO: {props.airportData?.icao}</Text>
          </View>
          <View style={Styles.wrapperCode}>
            <Text style={Styles.text}>
              {t('detailsScreen:code')}: {props.airportData?.continent.code}
            </Text>
            <Text style={Styles.text}>
              {t('detailsScreen:code')}: {props.airportData?.country.code}
            </Text>
            <Text style={Styles.text}>IATA: {props.airportData?.iata}</Text>
          </View>
        </View>
      </View>
      <Text style={Styles.headerLink}>{t('detailsScreen:links')}:</Text>
      <View style={Styles.wrapperLinks}>
        <FlatList
          data={props.linksAboutAirport()}
          extraData={props.airportData}
          renderItem={props.renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};
