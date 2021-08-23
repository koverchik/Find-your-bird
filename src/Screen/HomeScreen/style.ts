import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

import { Theme } from '../../Theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  button: ViewStyle;
  map: ViewStyle;
  circle: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
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
    circle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 20,
      height: 20,
      backgroundColor: theme.color.bright,
      zIndex: 3,
      borderRadius: 10,
    },
    left: {
      position: 'absolute',
      left: '50%',
      top: 0,
      width: 1,
      height: '100%',
      backgroundColor: theme.color.bright,
    },
    right: {
      position: 'absolute',
      right: '50%',
      top: 0,
      width: 1,
      height: '100%',
      backgroundColor: theme.color.bright,
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
