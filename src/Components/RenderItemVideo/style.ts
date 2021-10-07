import { StyleSheet } from 'react-native';
import { Theme } from '@theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    item: {
      backgroundColor: theme.color.primary,
      margin: 10,
      padding: 5,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textItem: {
      color: theme.color.onPrimary,
      alignSelf: 'center',
    },
    wrapperDownload: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonDownload: {
      width: 100,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: theme.color.bright,
      height: '90%',
      marginLeft: 15,
    },
    text: {
      color: 'white',
      height: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });
  return styles;
};
