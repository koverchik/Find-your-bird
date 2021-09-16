import { StyleSheet } from 'react-native';
import { Theme } from '@theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.background,
    },
  });
  return styles;
};
