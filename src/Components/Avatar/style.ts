import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    iconUser: {
      height: 80,
      width: 80,
    },
  });
  return styles;
};
