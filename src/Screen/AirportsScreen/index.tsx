import React, { FC, useEffect } from 'react';
import {
  ListRenderItem,
  ActivityIndicator,
  Animated,
  FlatListProps,
  SafeAreaView,
} from 'react-native';
import { createStyles } from './style';
import { AirportsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getAirports } from '../../Redux/selectors';
import { ItemFlatList } from '../../Components/ItemFlatList';
import { AirportsListTypes } from '../../Redux/api/type';
import { airportsList } from '../../Redux/action/airports';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const dispatch = useAppDispatch();

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
        data={airportsListData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        {...{ onScroll }}
      />
    </SafeAreaView>
  );
};
