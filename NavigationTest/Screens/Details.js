import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

export default function Details({ navigation }) {
    return (
        <View style={styles.containerView}>
            <Text style={styles.boldFont}>Welcome to detail!</Text>
            <Text>Functionality coming soon!</Text>
        </View>
    )
}