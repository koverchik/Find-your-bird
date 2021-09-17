import React, { FC, useEffect } from 'react';
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
import { AirportsScreenProps } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { getAirports } from '@redux/selectors';
import { ItemFlatList } from '@root/Components/ItemFlatList';
import { AirportsListTypes } from '@redux/api/type';
import { airportsList } from '@redux/action/airports';
import { SVGFind } from '@components/SVGFind';
import { useTranslation } from 'react-i18next';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(airportsList(props.route.params));
  }, []);

  const { pending, airportsListData } = useAppSelector(getAirports);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

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

  const emptyComponent = () => {
    return (
      <View style={Styles.emptyResult}>
        <SVGFind color={Styles.textEmptyResult.color} />
        <Text style={Styles.textEmptyResult}>{t('alert:messages:empty')}</Text>
      </View>
    );
  };

  const renderItem: ListRenderItem<AirportsListTypes> = ({ item, index }) => {
    const { name, municipalityName, countryCode, iata, icao, location } = item;
    return (
      <ItemFlatList
        index={index}
        title={name}
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
