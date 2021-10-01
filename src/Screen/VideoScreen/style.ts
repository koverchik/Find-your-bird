import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  button: ViewStyle;
};

export const createStyles = (theme: Theme) => {
  const styles: DetailsStyles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      margin: 40,
      padding: 15,
      backgroundColor: theme.color.bright,
      width: 150,
      position: 'absolute',
      bottom: -20,
      left: 90,
    },
  });
  return styles;
};
