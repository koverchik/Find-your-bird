import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  buttonDisable: ViewStyle;
  buttonActive: ViewStyle;
  buttonGoogle: ViewStyle;
  text: Text;
  input: Text;
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
    text: {
      color: theme.color.onPrimary,
    },
    buttonGoogle: {
      width: 192,
      height: 48,
    },
    buttonDisable: {
      margin: 30,
      padding: 15,
      backgroundColor: theme.color.bright,
      width: 150,
      alignItems: 'center',
    },
    buttonActive: {
      margin: 30,
      padding: 15,
      backgroundColor: theme.color.surface,
      width: 150,
      alignItems: 'center',
    },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10, width: 300 },
  });
  return styles;
};
