import { StyleSheet } from 'react-native';

import { Theme } from '../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.background,
    },
  });

  return styles;
};
