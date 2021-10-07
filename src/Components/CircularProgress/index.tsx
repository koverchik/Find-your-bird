import { useThemeAwareObject } from '@root/Theme/ThemeAwareObject.hook';
import React, { useRef, useEffect, FC } from 'react';
import { Animated, View } from 'react-native';
import { createStyles } from './style';
import { PropsCircleProgress } from './types';

export const CircularProgress: FC<PropsCircleProgress> = ({ progress }) => {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const Styles = useThemeAwareObject(createStyles);

  const animateProgress = useRef((toValue: number) => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  useEffect(() => {
    animateProgress(progress);
  }, [animateProgress, progress]);

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndictorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={Styles.container}>
      <Animated.View style={[Styles.circle, Styles.emptyCircle]}>
        <Animated.View
          style={[
            Styles.circle,
            Styles.indicator,
            { transform: [{ rotate: firstIndicatorRotate }] },
          ]}
        ></Animated.View>
        <Animated.View style={[Styles.circle, Styles.coverIndicator]}></Animated.View>
        <Animated.View
          style={[
            Styles.circle,
            Styles.indicator,
            {
              transform: [{ rotate: secondIndicatorRotate }],
              opacity: secondIndictorVisibility,
            },
          ]}
        ></Animated.View>
      </Animated.View>
    </View>
  );
};
