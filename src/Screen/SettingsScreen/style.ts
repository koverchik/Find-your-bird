import { StyleSheet } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

export const createStyles = (theme: Theme) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: theme.color.primary,
            flexDirection: 'column',
            width: '100%',
            height: '100%'
        },
        settingsText: {
            color: theme.color.onPrimary
        },
        settingsTextHeder: {
            color: theme.color.onPrimary,
            marginTop: 20,
            fontSize: 18
        },
        settingsItem: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginTop: 20,
            backgroundColor: theme.color.surface
        },
        item: {
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 350,
            color: theme.color.primary,
            fontSize: 14
        }
    });
    return styles;
};
