import React, { FC } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { createStyles } from './style';
import { AirportsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getAirports } from '../../Redux/selectors';
import { airportsListData } from './data';
import { ItemFlatList } from '../../Components/ItemFlatList';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(airportsList(props.route.params));
  // }, []);
  const { pending } = useAppSelector(getAirports);

  return pending ? (
    <ActivityIndicator
      size="large"
      color={Styles.wrapper.backgroundColor}
      style={Styles.activityIndicator}
    />
  ) : (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={airportsListData}
        renderItem={({ item }) => (
          <ItemFlatList
            title={item.name}
            subtitle={item.municipalityName}
            countryCode={item.countryCode}
            location={item.location}
            icao={item.icao}
            iata={item.iata}
          />
        )}
        keyExtractor={(item) => item.icao}
      />
    </SafeAreaView>
  );
};
