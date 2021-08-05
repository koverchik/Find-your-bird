import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../Screen/DetailsScreen';
import { HomeScreen } from '../Screen/HomeScreen';
import { HomeStackScreens } from './types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';

const Stack = createStackNavigator<RootStackParamList>();

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeNavigation: FC<HomeScreenNavigationProp> = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={HomeStackScreens.Home}
                component={HomeScreen}
                options={{ title: 'Home screen' }}
            />
            <Stack.Screen
                name={HomeStackScreens.Details}
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
};
