import { StyleSheet } from 'react-native';

export const createStyles = () => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 50,
      height: '80%',
    },
    slider: {
      width: 350,
      height: 40,
      transform: [{ rotate: '-90deg' }],
      position: 'absolute',
      top: 230,
      right: -145,
    },
    maxValue: {
      position: 'absolute',

      width: 80,
      top: 60,
      left: -15,
    },
    value: {
      position: 'absolute',
      bottom: 0,
      right: 25,
    },
    numbers: {
      color: 'white',
    },
  });
  return styles;
};
