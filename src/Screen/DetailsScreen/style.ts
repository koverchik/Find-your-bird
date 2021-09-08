import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.color.primary,
      flexDirection: 'column',
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
    },
    titleAirport: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 5,
      margin: 10,
    },
    textTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.color.onPrimary,
    },
    text: {
      color: theme.color.onPrimary,
    },
    wrapperLinks: {
      marginTop: 10,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    link: {
      color: theme.color.bright,
      fontSize: 14,
      margin: 5,
    },
    headerLink: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    wrapperPropsAndCode: {
      padding: 5,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 10,
      width: '100%',
      maxHeight: 100,
      flexDirection: 'row',
      alignItems: 'center',
    },
    wrapperCode: {
      alignSelf: 'flex-end',
      flexDirection: 'column',
    },
    wrapperProp: {
      flex: 1,
      flexDirection: 'column',
    },
    item: {},
  });
  return styles;
};
