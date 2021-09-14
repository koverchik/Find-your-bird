import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    wrapper: {
      borderRadius: 10,
      backgroundColor: theme.color.primary,
      margin: 10,
      padding: 10,
      borderWidth: 2,
      flex: 1,
      height: 200,
      justifyContent: 'space-between',
    },
    titleAirport: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    wrapperCordAndCode: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    wrapperButton: {
      alignItems: 'center',
    },
    button: {
      margin: 5,
      padding: 10,
      backgroundColor: theme.color.bright,
      width: 150,
      borderRadius: 10,
      borderBottomColor: theme.color.onPrimary,
      borderWidth: 2,
      alignItems: 'center',
    },
    textTitle: {
      fontSize: 18,
      color: theme.color.onPrimary,
    },
    text: {
      color: theme.color.onPrimary,
    },
  });
  return styles;
};
