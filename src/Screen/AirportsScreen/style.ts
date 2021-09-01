import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.color.primary,
      flexDirection: 'column',
    },
    wrapper: {
      height: 60,
      width: '90%',
      backgroundColor: theme.color.bright,
      margin: 10,
      padding: 10,
    },
    item: {
      color: theme.color.primary,
    },
    activityIndicator: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
    },
  });
  return styles;
};
