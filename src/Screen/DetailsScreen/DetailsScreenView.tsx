import React, { FC } from 'react';
import { View, Text, FlatList } from 'react-native';
import { createStyles } from './style';
import { DetailsScreenViewProps } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useTheme } from '@theme/Theme.context';

export const DetailsScreenView: FC<DetailsScreenViewProps> = ({
  airportData,
  linksAboutAirport,
  renderItem,
}) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <View style={Styles.container}>
      <FontAwesomeIcon
        icon={faStar}
        color={theme.color.onPrimary}
        style={Styles.favoriteIcon}
        size={25}
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
