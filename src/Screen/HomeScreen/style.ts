import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../Theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  button: ViewStyle;
  containerMap: ViewStyle;
  map: ViewStyle;
  dot: ViewStyle;
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
    containerMap: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.color.primary,
    },
    map: { flex: 1 },
    dot: {
      width: 25,
      height: 25,
      backgroundColor: theme.color.bright,
      borderRadius: 25,
      opacity: 0.6,
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
