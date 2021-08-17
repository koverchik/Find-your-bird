import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.primary,
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
    },
    settingsText: {
      color: theme.color.onPrimary,
    },
    wrapperProfile: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      marginLeft: 30,
    },
    wrappersUserData: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: 20,
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
    button: {
      alignItems: 'center',
      width: 150,
      padding: 15,
      backgroundColor: theme.color.bright,
      alignSelf: 'center',
      marginBottom: 20,
    },
  });
  return styles;
};
