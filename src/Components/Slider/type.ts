import { Animated, PanResponder, PanResponderInstance } from 'react-native';

export type SliderProps = {
  currentValueRadius: number;
  fcCurrentValueRadius: (value: number) => void;
};
