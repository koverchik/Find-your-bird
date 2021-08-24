import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 50,
      height: '80%',
    },
    line: {
      position: 'absolute',
      top: '5%',
      right: 25,
      height: '90%',
      width: 5,
      backgroundColor: theme.color.background,
    },
    maxValue: {
      position: 'absolute',
      top: 0,
      right: 15,
    },
    minValue: {
      position: 'absolute',
      bottom: 0,
      right: 23,
    },
    circle: {
      position: 'absolute',
      bottom: '5%',
      right: 18,
      width: 20,
      height: 20,
      backgroundColor: theme.color.bright,
      zIndex: 3,
      borderRadius: 10,
    },
  });
  return styles;
};
