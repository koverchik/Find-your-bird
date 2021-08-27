import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      margin: 0,
      padding: 0,
      height: 40,
      width: 40,
    },
  });
  return styles;
};
