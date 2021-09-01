import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      margin: 20,
      backgroundColor: theme.color.primary,
      flexDirection: 'column',
    },
    item: { margin: 7 },
  });
  return styles;
};
