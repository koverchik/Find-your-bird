import { StyleSheet, ViewStyle } from 'react-native';

type DetailsStyles = {
  container: ViewStyle;
  videoWrapper: ViewStyle;
  flatList: ViewStyle;
};

export const createStyles = () => {
  const styles: DetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    videoWrapper: {
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
  });
  return styles;
};
