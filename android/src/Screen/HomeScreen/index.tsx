import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { HomeStackScreens } from '../../Navigation/types';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps, StackNavigationPropNavigation } from './type';

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const navigation = useNavigation<StackNavigationPropNavigation>();

    const onPress = () =>
        navigation.navigate(HomeStackScreens.Details, { userId: 12 });
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Details</Text>
            </TouchableOpacity>
        </View>
    );
};
