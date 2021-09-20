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
import { SVGNotFound } from '@components/SVGNotFound';
import { useTheme } from '@theme/Theme.context';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(airportsList(props.route.params));
  }, []);

  const { pending, airportsListData } = useAppSelector(getAirports);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });
  const emptyComponent = () => {
    return (
      <View style={Styles.emptyResult}>
        <SVGNotFound color={theme.color.background} />
        <Text style={Styles.textEmptyResult}>Empty</Text>
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
