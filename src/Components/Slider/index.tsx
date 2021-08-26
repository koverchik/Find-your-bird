import React, { FC } from 'react';
import { View, Animated, Text } from 'react-native';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { SliderProps } from './type';

export const Slider: FC<SliderProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  return (
    <View style={Styles.container}>
      <Text style={Styles.maxValue}>1000</Text>
      <View style={Styles.line}></View>
      <Animated.View
        style={[
          Styles.circle,

          {
            transform: [{ translateX: 0 }, { translateY: props.pan.y }],
          },
        ]}
        {...props.panResponder.panHandlers}
      >
        <View style={Styles.numbersWrapper}>
          <Text style={Styles.numbers}>{props.numberOnSlider}</Text>
        </View>
      </Animated.View>
      <Text style={Styles.minValue}>0</Text>
    </View>
  );
};
