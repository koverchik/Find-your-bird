import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  circle: ViewStyle;
  emptyCircle: ViewStyle;
  indicator: ViewStyle;
  coverIndicator: ViewStyle;
};

const SIZE_CIRCULAR_PROGRESS = 30;

export const createStyles = (theme: Theme) => {
  const styles: DetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      maxHeight: SIZE_CIRCULAR_PROGRESS,
      maxWidth: SIZE_CIRCULAR_PROGRESS,
    },
    circle: {
      width: SIZE_CIRCULAR_PROGRESS,
      height: SIZE_CIRCULAR_PROGRESS,
      borderRadius: SIZE_CIRCULAR_PROGRESS / 2,
      borderWidth: SIZE_CIRCULAR_PROGRESS / 10,
    },
    emptyCircle: {
      borderColor: theme.color.surface,
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
      borderLeftColor: theme.color.surface,
      borderTopColor: theme.color.surface,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
    },
  });
  return styles;
};
