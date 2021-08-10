import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.primary,
      flexDirection: 'column',
      flex: 1,
    },
    settingsText: {
      color: theme.color.onPrimary,
    },
    settingsTextHeder: {
      color: theme.color.onPrimary,
      marginTop: 20,
      fontSize: 18,
    },
    settingsItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginTop: 20,
      backgroundColor: theme.color.surface,
    },
  });
  return styles;
};
