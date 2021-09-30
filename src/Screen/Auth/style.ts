import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  buttonGoogle: ViewStyle;
};

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create<DetailsStyles>({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.primary,
      flexDirection: 'column',
      flex: 1,
    },
    buttonGoogle: {
      width: 192,
      height: 48,
    },
  });
  return styles;
};
