import { Animated, PanResponder } from 'react-native';

export type SliderProps = {
  pan: Animated.ValueXY;
  numberOnSlider: number;
  panResponder: PanResponder;
};
