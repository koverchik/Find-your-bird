import { StyleSheet } from 'react-native';

export const createStyles = () => {
  const styles = StyleSheet.create({
    touchableOpacity: {
      width: '100%',
    },
    favoriteIcon: {
      flex: 1,
      alignSelf: 'flex-end',
    },
  });
  return styles;
};
