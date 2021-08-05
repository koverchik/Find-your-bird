import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { SettingsScreenProps } from './type';

export const SettingsScreen: FC<SettingsScreenProps> = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
};
