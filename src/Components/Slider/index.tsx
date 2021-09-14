import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { SliderProps } from './type';
import Slider from '@react-native-community/slider';
import { useTranslation } from 'react-i18next';

export const SliderCustom: FC<SliderProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  return (
    <View style={Styles.container}>
      <Text style={Styles.maxValue}> 1000 {t('general:km')}</Text>
      <Slider
        style={Styles.slider}
        minimumValue={0}
        maximumValue={1000}
        minimumTrackTintColor="#d9aebd"
        maximumTrackTintColor="#000000"
        thumbTintColor="#f84281"
        onValueChange={(value) => {
          props.fcCurrentValueRadius(Math.round(value));
        }}
      />
      <Text style={Styles.value}>{props.currentValueRadius}</Text>
    </View>
  );
};
