import React, { FC, useEffect, useRef } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Dimensions, TouchableOpacity, View, Animated, Text, PanResponder } from 'react-native';
import { log } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';

export const Slider = () => {
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
        if (gesture.moveY > 80 && gesture.moveY < 470) {
          pan.y.setValue(gesture.dy);
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
      ></Animated.View>
      <Text style={Styles.minValue}>0</Text>
    </View>
  );
};
