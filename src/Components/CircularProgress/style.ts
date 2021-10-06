import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  circle: ViewStyle;
  emptyCircle: ViewStyle;
  indicator: ViewStyle;
  coverIndicator: ViewStyle;
};

export const createStyles = (theme: Theme) => {
  const styles: DetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    circle: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      borderWidth: 150 / 10,
    },
    emptyCircle: {
      borderColor: theme.color.primary,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ rotate: '-45deg' }],
    },
    indicator: {
      position: 'absolute',
      borderLeftColor: theme.color.bright,
      borderTopColor: theme.color.bright,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    coverIndicator: {
      position: 'absolute',
      borderLeftColor: theme.color.primary,
      borderTopColor: theme.color.primary,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
    },
  });
  return styles;
};
