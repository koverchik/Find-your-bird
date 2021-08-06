import { StyleSheet, ViewStyle } from 'react-native';

type DetailsStyles = {
    container: ViewStyle;
    button: ViewStyle;
    text: Text;
};

export const styles = StyleSheet.create<DetailsStyles>({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'blue',
        padding: 15
    },
    text: {
        color: 'white'
    }
});
