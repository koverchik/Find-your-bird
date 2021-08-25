import React, { FC, useEffect, useRef, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Dimensions, TouchableOpacity, View, Animated, Text, PanResponder } from 'react-native';
import { log } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';

const SLIDER_RANGE = [80, 470];

export const Slider = () => {
  const [numberOnSlider, setNumberOnSlider] = useState(0);

  const Styles = useThemeAwareObject(createStyles);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (e, gesture) => {
        console.log(gesture);
        const { moveY, dy } = gesture;
        if (moveY > SLIDER_RANGE[0] && moveY < SLIDER_RANGE[1]) {
          pan.y.setValue(dy);
          console.log(dy);

          setNumberOnSlider(
            Math.round((1000 / (SLIDER_RANGE[1] - SLIDER_RANGE[0])) * (SLIDER_RANGE[1] - moveY)),
          );
        }
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={Styles.container}>
      <Text style={Styles.maxValue}>1000</Text>
      <View style={Styles.line}></View>
      <Animated.View
        style={[
          Styles.circle,

          {
            transform: [{ translateX: 0 }, { translateY: pan.y }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={Styles.numbersWrapper}>
          <Text style={Styles.numbers}>{numberOnSlider}</Text>
        </View>
      </Animated.View>
      <Text style={Styles.minValue}>0</Text>
    </View>
  );
};
