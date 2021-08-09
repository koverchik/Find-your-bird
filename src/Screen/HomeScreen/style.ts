import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../../Theme/Theme.interface';

type DetailsStyles = {
    container: ViewStyle;
    button: ViewStyle;
    text: Text;
};

export const createStyles = (theme: Theme) => {
    const styles = StyleSheet.create<DetailsStyles>({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.color.primary,
            flexDirection: 'column',
            height: '100%'
        },
        text: {
            color: theme.color.onPrimary
        },
        button: {
            padding: 15,
            backgroundColor: theme.color.bright
        }
    });
    return styles;
};
