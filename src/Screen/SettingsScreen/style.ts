import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'flex-start',
            backgroundColor: theme.color.primary,
            flexDirection: 'row',
            width: '100%',
            height: '100%'
        },
        settings: {},
        item: {
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 350,
            color: theme.color.onPrimary,
            fontSize: 14
        }
    });
    return styles;
};
