import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { DetailsScreenProps } from './types';

export const DetailsScreen: FC<DetailsScreenProps> = (props) => {
    const { navigation, route } = props;

    return (
        <View style={styles.container}>
            <Text>Details for you!</Text>
        </View>
    );
};
