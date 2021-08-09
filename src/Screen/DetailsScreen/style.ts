import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: theme.color.primary,
            flexDirection: 'column',
            width: '100%',
            height: '100%'
        }
    });
    return styles;
};
