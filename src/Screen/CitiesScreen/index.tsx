import React, { FC, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { createStyles } from './style';
import { CitiesScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';
import { api } from '../../Redux/store';
import { ResponseCities } from '../../Redux/api/type';
import { AxiosResponse } from 'axios';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';

import { RootStackParamList } from '../../Navigation/RootStackPrams';
import { citiesList } from '../../Redux/action';
import { getCities, getAuth } from '../../Redux/selectors/getAuth';

export const CitiesScreen: FC<CitiesScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  console.log(props.route.params);

  useEffect(() => {
    dispatch(citiesList(props.route.params));
  }, []);
  // const test = useAppSelector(getCities);
  // console.log(test);

  return (
    <View style={Styles.container}>
      <Text> </Text>
      {/* {listCities.map((data, i) => {
        return <Text key={'Cities' + i}>{`${data.countryCode}  ${data.municipalityName}`} </Text>;
      })} */}
    </View>
  );
};
