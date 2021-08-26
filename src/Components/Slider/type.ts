import { Animated, PanResponder, PanResponderInstance } from 'react-native';

export type SliderProps = {
  pan: Animated.ValueXY;
  numberOnSlider: number;
  panResponder: PanResponderInstance;
};
