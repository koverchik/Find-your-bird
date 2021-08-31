import React, { FC, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { createStyles } from './style';
import { AirportsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { api } from '../../Redux/store';
import { ResponseAirports } from '../../Redux/api/type';
import { AxiosResponse } from 'axios';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';

import { RootStackParamList } from '../../Navigation/RootStackPrams';
import { airportsList } from '../../Redux/action';
import { getAirports, getAuth } from '../../Redux/selectors/getAuth';

export const AirportsScreen: FC<AirportsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(airportsList(props.route.params));
  }, []);
  // const test = useAppSelector(getAirports);
  // console.log(test);

  return (
    <View style={Styles.container}>
      <Text> </Text>
      {/* {listAirports.map((data, i) => {
        return <Text key={'airports' + i}>{`${data.countryCode}  ${data.municipalityName}`} </Text>;
      })} */}
    </View>
  );
};
