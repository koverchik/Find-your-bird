import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  button: ViewStyle;
  text: Text;
};

export const createStyles = (theme: Theme) => {
  const styles: DetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    button: {
      flex: 1,
      backgroundColor: theme.color.bright,
      justifyContent: 'center',
      margin: 10,
      width: 160,
      maxHeight: 45,
    },
    text: {
      color: 'white',
      alignSelf: 'center',
    },
  });
  return styles;
};
