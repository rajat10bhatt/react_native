import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Button title='Electronics' onPress={() => navigation.navigate('Electornics')} />
            <Button title='Books' onPress={() => navigation.navigate('Books')} />
        </View>
    )
}
export default HomeScreen;