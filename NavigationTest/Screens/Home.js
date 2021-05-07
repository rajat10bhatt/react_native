import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles'

export default function Home({ navigation }) {
    return (
        <View style={styles.containerView}>
            <Text style={styles.boldFont}>Welcome!</Text>
            <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
        </View>
    )
}