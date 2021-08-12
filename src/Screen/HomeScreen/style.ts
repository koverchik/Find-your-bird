import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../Theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  button: ViewStyle;
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
    button: {
      padding: 15,
      backgroundColor: theme.color.bright,
    },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
  });
  return styles;
};
