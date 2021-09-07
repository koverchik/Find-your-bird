import React, { FC, useEffect, useRef } from 'react';
import { ActivityIndicator, Animated, Dimensions, FlatList, SafeAreaView } from 'react-native';
import { createStyles } from './style';
import { AirportsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getAirports } from '../../Redux/selectors';
import { ItemFlatList } from '../../Components/ItemFlatList';
import { airportsList } from '../../Redux/action/airports';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  useEffect(() => {
    dispatch(airportsList(props.route.params));
  }, []);

  const { pending, airportsListData } = useAppSelector(getAirports);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  return pending ? (
    <ActivityIndicator
      size="large"
      color={Styles.wrapper.backgroundColor}
      style={Styles.activityIndicator}
    />
  ) : (
    <SafeAreaView style={Styles.container}>
      <AnimatedFlatList
        bounces={false}
        data={airportsListData}
        renderItem={({ index, item }) => (
          <ItemFlatList
            index={index}
            title={item.name}
            subtitle={item.municipalityName}
            countryCode={item.countryCode}
            location={item.location}
            icao={item.icao}
            iata={item.iata}
            y={y}
          />
        )}
        keyExtractor={(item) => item.icao}
        {...{ onScroll }}
      />
    </SafeAreaView>
  );
};
