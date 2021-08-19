import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../Theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  button: ViewStyle;
  text: Text;
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
      margin: 40,
      padding: 15,
      backgroundColor: theme.color.bright,
      width: 150,
      alignItems: 'center',
    },
  });
  return styles;
};