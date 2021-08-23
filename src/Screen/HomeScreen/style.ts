import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../Theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  button: ViewStyle;
  map: ViewStyle;
  text: Text;
};

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create<DetailsStyles>({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    text: {
      color: theme.color.onPrimary,
    },
    map: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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
