import { StyleSheet } from 'react-native';
import { Theme } from '@theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    iconUser: {
      height: 80,
      width: 80,
    },
  });
  return styles;
};
