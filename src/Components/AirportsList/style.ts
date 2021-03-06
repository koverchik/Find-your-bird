import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  wrapper: ViewStyle;
  activityIndicator: ViewStyle;
  emptyResult: ViewStyle;
  textEmptyResult: Text;
};

export const createStyles = (theme: Theme) => {
  const styles: DetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      borderRadius: 10,
      backgroundColor: theme.color.primary,
      margin: 10,
      padding: 10,
      borderWidth: 2,
      flex: 1,
      justifyContent: 'space-between',
    },
    activityIndicator: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
    },
    emptyResult: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textEmptyResult: {
      color: theme.color.background,
    },
  });
  return styles;
};
