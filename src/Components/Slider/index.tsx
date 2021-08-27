import React, { FC, useState } from 'react';
import { View, Animated, Text } from 'react-native';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { SliderProps } from './type';
import Slider from '@react-native-community/slider';

export const SliderCustom = () => {
  const Styles = useThemeAwareObject(createStyles);

  const [number, setNumber] = useState(0);
  return (
    <View style={Styles.container}>
      <Text style={Styles.maxValue}>1000</Text>
      <Slider
        style={Styles.slider}
        minimumValue={0}
        maximumValue={1000}
        minimumTrackTintColor="#d9aebd"
        maximumTrackTintColor="#000000"
        thumbTintColor="#f84281"
        onValueChange={(value) => {
          setNumber(Math.round(value));
        }}
      />
      <Text style={Styles.value}>{number}</Text>
    </View>
  );
};
