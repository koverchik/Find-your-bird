import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '@theme/Theme.interface';

type DetailsStyles = {
  container: ViewStyle;
  videoWrapper: ViewStyle;
  flatList: ViewStyle;
  // button: ViewStyle;
  // item: ViewStyle;

  // text: Text;
  // buttonDownload: ViewStyle;
  // textItem: Text;
};

export const createStyles = (theme: Theme) => {
  const styles: DetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    videoWrapper: {
      borderColor: 'black',
      borderWidth: 3,
      position: 'absolute',
      top: 150,
      left: 0,
      bottom: 0,
      right: 0,
    },
    flatList: {
      flex: 1,
      width: '90%',
      alignItems: 'stretch',
    },
    // button: {
    //   flex: 1,
    //   backgroundColor: theme.color.bright,
    //   justifyContent: 'center',
    //   margin: 10,
    //   width: 160,
    //   maxHeight: 45,
    // },
    // buttonDownload: {
    //   width: 100,
    //   justifyContent: 'center',
    //   backgroundColor: theme.color.bright,
    //   alignItems: 'center',
    //   height: '90%',
    // },

    // item: {
    //   backgroundColor: theme.color.primary,
    //   margin: 10,
    //   padding: 5,
    //   height: 50,
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    // },
    // text: {
    //   color: 'white',
    //   alignSelf: 'center',
    // },
    // textItem: {
    //   color: theme.color.onPrimary,
    //   alignSelf: 'center',
    // },
  });
  return styles;
};
