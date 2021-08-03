import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreenScreen = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <FlatList
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' }
                ]}
                renderItem={({ item }) => (
                    <Button
                        title={item.key}
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                )}
            />
        </View>
    );
};

export default ProfileScreenScreen;
