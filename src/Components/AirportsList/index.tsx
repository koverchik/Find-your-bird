import React, { FC } from 'react';
import {
  ListRenderItem,
  ActivityIndicator,
  Animated,
  FlatListProps,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { createStyles } from './style';
import { AirportsListProps } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { ItemFlatList } from '@root/Components/ItemFlatList';
import { AirportsListTypes } from '@redux/api/type';
import { SVGNotFound } from '@components/SVGNotFound';
import { useTheme } from '@theme/Theme.context';
import { useTranslation } from 'react-i18next';

export const AirportsList: FC<AirportsListProps> = ({ pending = false, airportsListData }) => {
  const Styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  const emptyComponent = () => {
    return (
      <View style={Styles.emptyResult}>
        <SVGNotFound color={theme.color.background} />
        <Text style={Styles.textEmptyResult}>{t('alert:messages:empty')}</Text>
      </View>
    );
  };

  const contentContainerStyleFlatList = !airportsListData.length && Styles.container;

  if (pending) {
    return (
      <ActivityIndicator
        size="large"
        color={Styles.wrapper.backgroundColor}
        style={Styles.activityIndicator}
      />
    );
  }
  const keyExtractor: FlatListProps<AirportsListTypes>['keyExtractor'] = (item) => {
    return item.icao;
  };

  const renderItem: ListRenderItem<AirportsListTypes> = ({ item, index }) => {
    const { name, municipalityName, countryCode, iata, icao, location, shortName } = item;

    return (
      <ItemFlatList
        index={index}
        title={name}
        shortName={shortName}
        subtitle={municipalityName}
        countryCode={countryCode}
        location={location}
        icao={icao}
        iata={iata}
        y={y}
      />
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Animated.FlatList
        contentContainerStyle={contentContainerStyleFlatList}
        bounces={false}
        ListEmptyComponent={emptyComponent}
        data={airportsListData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        {...{ onScroll }}
      />
    </SafeAreaView>
  );
};
